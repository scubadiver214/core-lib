export const xOTPSessionToken = 'xOTPSessionToken';
export const instanceId = 'InstanceId';
export const udsLongToken = 'UDSLongToken';

export enum HttpStatus {
  OK = 200,
  FileNotFound = 404,
  InternalServerError = 500
}

export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  BAD_GATEWAY = 502
}

export const globalEvents = {
  emitChangedEvent: 'emitChangedEvent',
  hideBusySpinner: 'hideBusySpinner',
  controlCenterEvent: 'controlCenterEvent',
  otpFlexgridPendingChanges: 'otpFlexgridPendingChanges',
  otpFlexgridSaveAndContinue: 'otpFlexgridSaveAndContinue',
  openDataSourceHistoryModal: 'openDataSourceHistoryModal',
  openAttachmentsModal: 'openAttachmentsModal',
  deleteAttachment: 'deleteAttachment',
  downloadAttachment: 'downloadAttachment',
  otpFlexgridResetPendingChanges: 'otpFlexgridResetPendingChanges'
};

export interface IGlobalEvent {
  event: string;
  data: boolean | string | unknown;
}

export interface IFlexGridQueryStringOptions {
  $orderby?: string;
  $top?: number;
  $filter?: string;
  $skip?: number;
  limit?: number;
}

export enum KeyEvents {
  ArrowUp = 'ArrowUp',
  ArrowRight = 'ArrowRight',
  ArrowLeft = 'ArrowLeft',
  ArrowDown = 'ArrowDown',
  Tab = 'Tab',
  Insert = 'Insert',
  Delete = 'Delete',
  Backspace = 'Backspace',
  Enter = 'Enter',
  Escape = 'Escape',
  PageDown = 'PageDown',
  Save = 's',
  Home = 'Home',
  End = 'End',
  NumpadDecimal = '.',
  NumpadSubtract = '-',
  Period = '>',
  Comma = '<',
  Shift = 'Shift',
  UnderScore = '_',
  Minus = '-',
  Control = 'Control',
  KeyV = 'v',
  KeyC = 'c',
  Digit0 = '0',
  Digit1 = '1',
  Digit2 = '2',
  Digit3 = '3',
  Digit4 = '4',
  Digit5 = '5',
  Digit6 = '6',
  Digit7 = '7',
  Digit8 = '8',
  Digit9 = '9'
}

export enum AlertType {
  danger = 'danger',
  info = 'info',
  success = 'success',
  warning = 'warning'
}

export const filterBlankValue = {
  value: '',
  blank: 'Blank'
};

export interface IDateTime {
  invalidDate: boolean;
  originalDate: Date;
  originalDateStr: string;
  currentTimeZoneDate: Date;
  currentTimeZoneDateStr: string;
}
