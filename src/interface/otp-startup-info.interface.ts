export interface IStartupDataWrapper {
  startupData: IStartupData;
}
export interface IStartupData {
  OTP_INSTANCERESET: boolean;
  OTP_INSTANCES: IOtpInstances;
}
export interface IOtpInstances {
  totalItems: number;
  firstTime: boolean;
  data: IOtpInstance[];
}

export interface IOtpInstance {
  ApplicationId: number;
  ApplicationName: string;
  Id: number;
  Name: string;
  VersionId: number;
  VersionName: string;
}

export interface IOtpInstanceIdInfo {
  instanceId: number;
}
