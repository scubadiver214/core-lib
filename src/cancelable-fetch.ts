import { Observable } from 'rxjs';

export type RequestInfo = Parameters<typeof window.fetch>[0];
export type RequestInit = Parameters<typeof window.fetch>[1];

const symbol = Symbol('dasdas');

export function cancelCancelable(req: Promise<Request>): void {
  if ((req as unknown)[symbol]) {
    (req as unknown)[symbol]();
  }
}

export function fetch(input: RequestInfo, init?: RequestInit, rejectOnCancel?: boolean): Promise<Request> {
  const controller = new AbortController();
  init = init || {};
  init.signal = controller.signal;
  const request = window.fetch(input, init).catch((error) => {
    if (error instanceof DOMException && error.name === 'AbortError' && !rejectOnCancel) {
      return error;
    } else {
      return Promise.reject(error);
    }
  });

  (request as unknown)[symbol] = () => {
    controller.abort();
    return request;
  };

  return request as any;
}

export function fetch$(input: RequestInfo, init?: RequestInit): Observable<unknown> {
  const request = fetch(input, init, true);
  let observersCount = 0;
  const $ = new Observable((observer) => {
    ++observersCount;
    request
      .then((r) => {
        observer.next(r);
        observer.complete();
      })
      .catch((e) => {
        if (e instanceof DOMException && e.name === 'AbortError') {
          observer.complete();
        } else {
          observer.error(e);
        }
      });
    return () => {
      --observersCount;
      if (observersCount === 0) {
        cancelCancelable(request);
      }
    };
  });
  return $;
}
