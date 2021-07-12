/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IDataResponse {
  filteredTotals: any[];
  grandTotals: any[];
  __count: number;
  __filteredcount: number;
  results: any[];
}

export interface IODataModel {
  d: IDataResponse;
}
