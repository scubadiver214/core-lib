import { GenericObject } from './utility-helper';

export namespace LocalStorageHelper {
  export const getItem = (key: string): string | null => {
    const value = localStorage.getItem(key);
    if (!value) {
      return null;
    }
    if (value[0] === '{') {
      return JSON.parse(value);
    }
    return value;
  };

  export const removeItem = (key: string): void => {
    localStorage.removeItem(key);
  };

  export const setItem = (key: string, value: string | GenericObject): void => {
    if (!key || !value) {
      return;
    }
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  };

  export const clearStorage = (): void => {
    localStorage.clear();
  };
}
