import { InjectionToken } from "@angular/core";

import { IVehicleProvider, VehicleSummary,VEHICLE_PROVIDER } from "src/interfaces/ivehicle.provider";

export const FERRY_PROVIDER = new InjectionToken("IFerryProvider");

export interface IFerryProvider {
  GetFerry(): FerrySummary;
}

export class FerrySummary {
  type: FerryType;
  cargo: FerryCargoSummary;
}

export enum FerryType {
  small,
  large,
}

export enum FerryCargoSummary  {
  maxCapacity,
  isFull,
  cargoList,
  // cargoList: VehicleSummary[],
}
