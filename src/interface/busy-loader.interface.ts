export interface IBusyLoaderSpinner {
  startBusyLoader(): void;
  stopBusyLoader(): void;
}

export interface IBusyLoader {
  busyLoaderSpinner: IBusyLoaderSpinner;
  timeDelay?: number;
}
