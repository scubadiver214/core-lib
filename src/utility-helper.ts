/* eslint-disable @typescript-eslint/no-explicit-any */
import { Observable, forkJoin } from 'rxjs';

export type GenericObject = { [key: string]: any };
export type Predicate<T> = (val: T) => boolean;
export type Callback = (...args: any) => any;
export type Function<A = any[], B = any> = (...args: A extends any[] ? A : [A]) => B;

export namespace UtilityHelper {
  export const forkJoinObservables = (observables: Observable<any[]>[]): Observable<any[]> => {
    return forkJoin(observables);
  };

  export const isEmpty = (obj: GenericObject): boolean => {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return true;
  };

  export const generateRandomString = (): string => {
    return (
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15)
    );
  };

  export const sortArrayByType = (propertyName: string): any => {
    return (positionOne: Array<any>, positionTwo: Array<any>) => {
      if (positionOne[propertyName].toUpperCase() > positionTwo[propertyName].toUpperCase()) {
        return 1;
      } else if (positionOne[propertyName].toUpperCase() < positionTwo[propertyName].toUpperCase()) {
        return -1;
      }
      return 0;
    };
  };

  export const arrayFindObjectIndexByProp = <T>(arr: Array<T>, prop: string | number, val: string): number => {
    return arr.findIndex((obj) => obj[prop] === val);
  };

  export const arraysEqual = <T>(a: Array<T>, b: Array<T>): boolean => {
    if (a === b) {
      return true;
    }
    if (a == null || b == null) {
      return false;
    }
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  };

  export const arraySort = <T>(array: Array<T>, property: string): Array<T> => {
    return array.sort((a, b) => (tryParseInt(a[property]) > tryParseInt(b[property]) ? 1 : -1));
  };

  export const queryKeyArrayBuilder = <T>(paramsValue: T[], paramId: string): string => {
    const esc = encodeURIComponent;
    return paramsValue.map((k) => esc(paramId) + '=' + esc(k.toString())).join('&');
  };

  export const flatten = <T>(array: Array<T>, prop: string): Array<T> => {
    return array.reduce((arr, elem): any => [...arr, ...elem[prop]], []);
  };

  export const removeDuplicates = <T>(array: Array<T>, prop: string): Array<T> => {
    return array.filter((obj, pos, arr) => arr.map((mapObj) => mapObj[prop]).indexOf(obj[prop]) === pos);
  };

  export const removeParentWithoutAnyChild = <T>(array: Array<T>, prop: string): Array<T> => {
    return array.filter((mapObj) => mapObj[prop].length > 0);
  };

  export const queryStringBuilder = (data: GenericObject, url?: string): string => {
    for (const key in data) {
      if (data[key] === '') {
        delete data[key];
      }
    }
    const qs = Object.keys(data)
      .map(function(key) {
        return [key, data[key]].join('=');
      })
      .join('&');
    return url ? (url.indexOf('?') > -1 ? `${url}&${qs}` : `${url}?${qs}`) : qs;
  };

  export const isFilenameValid = (filename: string): boolean => {
    return !!/^[\w\-\(\). ]+$/gi.test(filename);
  };

  export const hasValidFileExtension = (fileName: string, validFileExtensions: string[]): boolean => {
    return new RegExp('(' + validFileExtensions.join('|').replace(/\./g, '\\.') + ')$').test(fileName);
  };

  export const compact = <T>(arr = []): T[] => arr.filter(Boolean);

  export const contains = (s1: string, s2 = ''): boolean => s1.toLowerCase().indexOf(s2.toLowerCase()) !== -1;

  export const delay = (fn: Callback, wait: number, ...args: any[]): number => setTimeout(fn, wait, ...args);

  export const unique = <T>(arr: any[]): T[] => [...new Set(arr)];

  export const sum = (...arr: number[]): number => [...arr].reduce((acc, val) => acc + val, 0);

  export const sumBy = <T = any>(arr: T[], fn: string | ((a: T) => number)): number => {
    return arr.map(typeof fn === 'function' ? fn : (val: any) => val[fn]).reduce((acc, val) => acc + val, 0);
  };

  const tryParseInt = (el: string): string | number => {
    if (typeof el === 'number') {
      return el;
    }
    return parseInt(el, 10) || el;
  };

  export const formUrlParam = (url: string, data: string[]): string => {
    let queryString = '';
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (!queryString) {
          queryString = `?${key}=${data[key]}`;
        } else {
          queryString += `&${key}=${data[key]}`;
        }
      }
    }
    return url + queryString;
  };
}
