import { SessionStorageHelper } from './session-storage-helper';
import { instanceId, xOTPSessionToken } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const apiHeaders = (): any => {
  const currentInstanceId = SessionStorageHelper.getItem(instanceId);
  const xOtpSession = SessionStorageHelper.getItem(xOTPSessionToken);
  return {
    ...(xOtpSession && { 'X-OTP-Session': xOtpSession }),
    ...(currentInstanceId && { Instance: currentInstanceId }),
    'Content-Type': 'application/json'
  };
};
