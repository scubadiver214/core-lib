import { GenericObject } from './utility-helper';

export namespace SessionStorageHelper {
  export const getItem = (key: string): string | null => {
    const value = sessionStorage.getItem(key);
    if (!value) {
      return null;
    }
    if (value[0] === '{') {
      return JSON.parse(value);
    }
    return value;
  };

  export const removeItem = (key: string): void => {
    sessionStorage.removeItem(key);
  };

  export const setItem = (key: string, value: string | GenericObject): void => {
    if (!key || !value) {
      return null;
    }
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    sessionStorage.setItem(key, value);
  };

  export const clearStorage = (): void => {
    sessionStorage.clear();
  };
}
