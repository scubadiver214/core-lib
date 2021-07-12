export const uriMatch = (url: string, fetchInterceptorURIs: string[]): boolean => {
  const result = fetchInterceptorURIs.some((urlFragment: string) => {
    return url.toLocaleLowerCase().includes(urlFragment.toLocaleLowerCase());
  });
  return result;
};
