import { Injectable } from "@angular/core";

import {
    IFerryProvider,
    FerrySummary,
    FerryType,
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


        // TODO Use current Vehicle to get the correct Ferry type
        const vehicleSize = () => {
            const randomNumber = Math.floor(Math.random() * 2) + 1;

            switch (randomNumber) {
                case 1: {
                    return {
                        type: VehicleSize.small,
                    };
                }
                case 2: {
                    return {
                        type: VehicleSize.large,
                    };
                }
                default: {
                    return {
                        type: VehicleSize.small,
                    }
                }
            };
        }

        const size = VehicleSize.large;
        switch (size) {
            // case VehicleSize.small: {
            //     return {
            //         type: FerryType.small,
            //     };
            // }
            case VehicleSize.large: {
                return {
                    type: FerryType.large,
                };
            }
            default: {
                return {
                    type: FerryType.small,
                };
            }
        }
    }
}

