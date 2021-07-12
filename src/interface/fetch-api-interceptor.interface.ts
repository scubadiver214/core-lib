import { IBusyLoader } from './busy-loader.interface';

export interface IFetchInterceptorModel {
  fetchInterceptorType: IFetchInterceptorType;
  fetchInterceptorURIs?: string[];
  fetchInterceptorLoader?: IFetchLoader;
}

export interface IRunnableFetchInterceptor {
  fetchInterceptorModel: IFetchInterceptorModel;
  runFetchInterceptor(): void;
}

export enum IFetchInterceptorType {
  busyLoader = 'busyLoader'
}

export interface IFetchLoader {
  busyLoader?: IBusyLoader;
}
