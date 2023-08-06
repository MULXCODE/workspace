import { InjectionToken } from "@angular/core";

export const FERRY_PROVIDER = new InjectionToken("IFerryProvider");

export interface IFerryProvider {
  GetFerry(): FerrySummary;
}

export class FerrySummary {
  type: FerryType;
}

export enum FerryType {
  small,
  large,
}
