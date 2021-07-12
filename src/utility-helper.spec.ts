import { UtilityHelper } from './utility-helper';

describe('Utility tests', () => {
  test('should return true for empty object', () => {
    const obj = {};
    const result = UtilityHelper.isEmpty(obj);
    expect(result).toBe(true);
  });

  it('should return false for not empty object', () => {
    const obj = { foo: 'bar' };
    const result = UtilityHelper.isEmpty(obj);
    expect(result).toBe(false);
  });

  it('should return true parseable int', () => {
    const arr: Array<any> = [{ homer: 'bar' }, { homer: 'close' }, { homer: 'foo' }, { homer: 'blond' }];
    const result = UtilityHelper.arraySort<any>(arr, 'homer');
    expect(result).toEqual([{ homer: 'bar' }, { homer: 'blond' }, { homer: 'close' }, { homer: 'foo' }]);
  });

  it('should filter out falsy values via compact method', () => {
    const result: Array<any> = UtilityHelper.compact([0, 1, false, 2, '', 3, 'a', Number('e') * 23, NaN, 's', 34]);
    expect(result).toEqual([1, 2, 3, 'a', 's', 34]);
  });

  it('should filter out duplicates va unique method', () => {
    expect(UtilityHelper.unique([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should delay callback function for 1 second', () => {
    jest.useFakeTimers();
    let foo: number = 1;
    UtilityHelper.delay((arg) => (foo = arg + foo), 1000, 1);
    expect(foo).toBe(1);
    jest.runAllTimers();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(foo).toBe(2);
  });

  it('should find partial ext via contains method', () => {
    expect(UtilityHelper.contains('Text1', 'Ext')).toBe(true);
    expect(UtilityHelper.contains('Text1', 'foo')).toBe(false);
  });

  it('should sum up numbers via contains method', () => {
    expect(UtilityHelper.sum(1, 2, 3, 4)).toEqual(10);
    expect(UtilityHelper.sum(...[1, 2, 3, 4])).toEqual(10);
  });

  it('should reduce via sumBy method', () => {
    expect(UtilityHelper.sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n)).toEqual(20);
    expect(UtilityHelper.sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n')).toEqual(20);
  });

  it('should return true arrays are equal', () => {
    const arr1: Array<any> = ['bar', 'blond', 'close', 'foo'];
    const arr2: Array<any> = ['bar', 'blond', 'close', 'foo'];
    const result = UtilityHelper.arraysEqual<any>(arr1, arr2);
    expect(result).toBeTruthy();
  });

  it('should return true arrays are not equal', () => {
    const arr1: Array<any> = ['bar', 'blond', 'close', 'foo'];
    const arr2: Array<any> = ['bar', 'foobar', 'close', 'foo'];
    const result = UtilityHelper.arraysEqual<any>(arr1, arr2);
    expect(result).toBeFalsy();
  });

  describe('isFilenameValid', () => {
    it('isFilenameValid: should not thrown an exception when the file name is valid', () => {
      const validFileName = 'validFileName.txt';
      let result: boolean;
      const call: any = function(): void {
        result = UtilityHelper.isFilenameValid(validFileName);
      };
      expect(call).not.toThrow();
      expect(result).toBeTruthy();
    });

    it('isFilenameValid: should not thrown an exception when the file name is not valid', () => {
      const validFileName = 'invalidFileName. txt$/';
      let result: boolean;

      const call: any = function(): void {
        result = UtilityHelper.isFilenameValid(validFileName);
      };
      expect(call).not.toThrow();
      expect(result).toBeFalsy();
    });
  });
});
