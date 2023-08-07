import { Injectable } from "@angular/core";

import {
    IFerryProvider,
    FerrySummary,
    FerryType,
    FerryCargoSummary,
} from "../interfaces/iferry.provider";
import {
    IVehicleProvider,
    VehicleSummary,
    VehicleSize,
    VehicleType,
} from "../interfaces/ivehicle.provider";

@Injectable()
export class FerryService implements IFerryProvider {


    GetFerry(): FerrySummary {

        let ferry = new FerrySummary();
        ferry.type = FerryType.small;
        ferry.cargoCapacity = FerryCargoSummary.maxCapacity;
        ferry.cargoFull = FerryCargoSummary.isFull;
        ferry.cargoList = FerryCargoSummary.cargoList;
        return ferry;
        
    }
}

