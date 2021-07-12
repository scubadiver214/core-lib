import { convertUTCDateToLocalDate, parseDateTimeStr, formatDate } from './date-time';

describe('DateTimeService', () => {
  describe('convertUTCDateToLocalDate', () => {
    it('should not to throw exception', () => {
      let result;
      const call: any = function(): void {
        result = convertUTCDateToLocalDate(new Date('2016-12-13T16:47:28.414299'));
      };
      expect(call).not.toThrow();
      expect(result).toBeDefined();
    });
  });

  describe('parseDateTimeStr', () => {
    it('should not to throw exception and return it is valid date', () => {
      let result;
      const call: any = function(): void {
        result = parseDateTimeStr(new Date('2016-12-13T16:47:28.414299').toString());
      };
      expect(call).not.toThrow();
      expect(result.invalidDate).toBe(false);
      expect(result.currentTimeZoneDate).toBeDefined();
    });
    it('should not to throw exceptionand and return it is invalid date', () => {
      let result;
      const call: any = function(): void {
        result = parseDateTimeStr('test');
      };
      expect(call).not.toThrow();
      expect(result.invalidDate).toBe(true);
      expect(result.currentTimeZoneDate).toBeUndefined();
    });
  });

  describe('formatDate', () => {
    it('should not to throw exception and return the date formated ', () => {
      let result;
      const call: any = function(): void {
        result = formatDate('2016-12-13T16:47:28.414299');
      };
      expect(call).not.toThrow();
      expect(result).toBe('12/13/2016');
    });
  });
});
