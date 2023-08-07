import { Component, Inject } from "@angular/core";
import { IVehicleProvider, VehicleSummary, VEHICLE_PROVIDER } from "src/interfaces/ivehicle.provider";
import { IFerryProvider, FerrySummary, FERRY_PROVIDER,FerryType, } from "src/interfaces/iferry.provider";

@Component({
  selector: "ferry",
  templateUrl: "./ferry.component.html",
  styleUrls: ["./ferry.component.css"]
})

export class FerryComponent {
  currentFerry:FerrySummary;

  constructor(
    @Inject(FERRY_PROVIDER) private ferryProvider: IFerryProvider
    
  ) {}

  }
  
  export class FerryList {
    protected ferryList: Ferry[] = [];
    
    constructor() {
        this.ferryList = [];
    }
}

export class Ferry {
    protected type: FerryType;
    protected maxCapacity: number;
    protected cargoList: VehicleSummary[] = [];
    protected cargoFull: boolean;

    constructor() {
        this.type = FerryType.small;
        this.maxCapacity = 0;
        this.cargoList = [];
        this.cargoFull = false;
    }
  
    getCargo(): VehicleSummary[] {
      return this.cargoList;
    }
  
    addCargo(cargo: VehicleSummary) {
      if (!this.isFull()) {
        this.cargoList.push(cargo);
      }
    }
  
    removeCargo(cargo: VehicleSummary) {
      const index = this.cargoList.indexOf(cargo);
      if (index > -1) {
        this.cargoList.splice(index, 1);
      }
    }
  
    isFull(): boolean {
      return this.cargoList.length >= this.maxCapacity;
    }
  }
  
//   export class SmallFerry extends Ferry {
//     constructor() {
//     //   super(8);
//     }
//   }
  
//   export class LargeFerry extends Ferry {
//     constructor() {
//       super(6);
//     }
//   }
  

