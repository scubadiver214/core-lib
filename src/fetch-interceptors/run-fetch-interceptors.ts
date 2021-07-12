import { IRunnableFetchInterceptor } from '../interface/fetch-api-interceptor.interface';

export const fetchApiHooks: Array<IRunnableFetchInterceptor> = [];

export const runFetchInterceptors = (): void => {
  while (fetchApiHooks.length) {
    const hook = fetchApiHooks.shift();
    hook.runFetchInterceptor();
  }
};
