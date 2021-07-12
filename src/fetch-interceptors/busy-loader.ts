/* eslint-disable prefer-rest-params */
import { timer } from 'rxjs';
import { IFetchInterceptorType, IFetchInterceptorModel, IRunnableFetchInterceptor } from '../interface/fetch-api-interceptor.interface';
import { uriMatch } from './uri-match';

export class BusyLoader implements IRunnableFetchInterceptor {
  fetchInterceptorModel: IFetchInterceptorModel;

  constructor(fetchInterceptorModel: IFetchInterceptorModel) {
    this.fetchInterceptorModel = fetchInterceptorModel;
  }

  runFetchInterceptor(): void {
    if (this.fetchInterceptorModel.fetchInterceptorType !== IFetchInterceptorType.busyLoader) {
      throw new Error('Invalid Fetch Busy Loader Interceptor Type: ' + this.fetchInterceptorModel.fetchInterceptorType);
    }
    const fetchInterceptorURIs = this.fetchInterceptorModel.fetchInterceptorURIs;
    const busyLoader = this.fetchInterceptorModel.fetchInterceptorLoader.busyLoader;
    const originalFetch = window.fetch;
    window.fetch = function() {
      let inFlightRequests = 0;
      const requestUrl = arguments[0].url;
      const urlMatch = uriMatch(requestUrl, fetchInterceptorURIs);
      if (!urlMatch) {
        return originalFetch.apply(this, arguments);
      }
      inFlightRequests++;
      timer(busyLoader.timeDelay || 1000).subscribe(() => {
        if (inFlightRequests > 0) {
          busyLoader.busyLoaderSpinner.startBusyLoader();
        }
      });
      return originalFetch.apply(this, arguments).then((response: Response) => {
        inFlightRequests--;
        if (inFlightRequests === 0) {
          busyLoader.busyLoaderSpinner.stopBusyLoader();
        }
        return response;
      });
    };
  }
}
