/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable prefer-rest-params */
import { from, Observable } from 'rxjs';
import { apiHeaders } from './headers-helper';
import { IFetchInterceptorModel } from './interface/fetch-api-interceptor.interface';
import { BusyLoader } from './fetch-interceptors/busy-loader';
import { runFetchInterceptors, fetchApiHooks } from './fetch-interceptors/run-fetch-interceptors';

export namespace OTPCoreHttpClient {
  export function http<T>(request: RequestInfo): Observable<T> {
    runFetchInterceptors();
    const apiCall = fetch(request)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson as T;
      })
      .catch((err) => {
        throw Error(err.statusText);
      });
    return from(apiCall);
  }

  export function get<T>(path: string, headers?: any, body?: any): Observable<T> {
    headers = { ...apiHeaders(), ...headers };
    const args: RequestInit = {
      method: 'get',
      ...(headers && { headers: headers }),
      ...(body && { body: JSON.stringify(body) })
    };
    return http<T>(new Request(path, args));
  }

  export function deleteData<T>(path: string, headers?: any, id?: any): Observable<T> {
    headers = { ...apiHeaders(), ...headers };
    const args: RequestInit = {
      method: 'delete',
      ...(headers && { headers: headers })
    };
    if (id) {
      path = `path/${id}`;
    }
    return http<T>(new Request(path, args));
  }

  export function post<T>(path: string, body: any, headers?: any): Observable<T> {
    headers = { ...apiHeaders(), ...headers };
    const args: RequestInit = {
      method: 'post',
      ...(headers && { headers: headers }),
      ...(body && { body: JSON.stringify(body) })
    };
    return http<T>(new Request(path, args));
  }

  export function put<T>(path: string, body: any, headers?: any): Observable<T> {
    headers = { ...apiHeaders(), ...headers };
    const args: RequestInit = {
      method: 'put',
      ...(headers && { headers: headers }),
      ...(body && { body: JSON.stringify(body) })
    };
    return http<T>(new Request(path, args));
  }

  export function patch<T>(path: string, body: any, headers?: any): Observable<T> {
    headers = { ...apiHeaders(), ...headers };
    const args: RequestInit = {
      method: 'PATCH',
      ...(headers && { headers: headers }),
      ...(body && { body: JSON.stringify(body) })
    };
    return http<T>(new Request(path, args));
  }

  // YMMV - for best results, you should register this method during your applications bootstrap stage.
  export const registerFetchAPIInterceptor = (fetchInterceptorModel: IFetchInterceptorModel): void => {
    switch (fetchInterceptorModel.fetchInterceptorType) {
      case 'busyLoader':
        fetchApiHooks.push(new BusyLoader(fetchInterceptorModel));
        break;
    }
  };
}
