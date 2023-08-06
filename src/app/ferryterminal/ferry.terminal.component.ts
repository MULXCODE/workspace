import { Component, Inject } from "@angular/core";
import {
  IVehicleProvider,
  VehicleSummary,
  VEHICLE_PROVIDER
} from "src/interfaces/ivehicle.provider";

import {
  IFerryProvider,
  FerrySummary,
  FERRY_PROVIDER
} from "src/interfaces/iferry.provider";

@Component({
  selector: "ferry-terminal",
  templateUrl: "./ferry.terminal.component.html",
  styleUrls: ["./ferry.terminal.component.css"]
})
export class FerryTerminalComponent {
  currentVehicle: VehicleSummary;
  currentFerry:FerrySummary;

  constructor(
    @Inject(VEHICLE_PROVIDER) private vehicleProvider: IVehicleProvider,
    @Inject(FERRY_PROVIDER) private ferryProvider: IFerryProvider
    
  ) {}

  public getVehicle() {
    this.currentVehicle = this.vehicleProvider.GetVehicle();
    console.log(this.currentVehicle);
    this.currentFerry = this.currentFerry ? this.currentFerry : this.ferryProvider.GetFerry();
    console.log(this.currentFerry);
 
  }
 
  public assignVehicle() {
    this.currentVehicle = this.currentVehicle ? this.currentVehicle : this.vehicleProvider.GetVehicle();
    console.log(this.currentVehicle);
    this.currentFerry = this.currentFerry ? this.currentFerry : this.ferryProvider.GetFerry();
    console.log(this.currentFerry);
   
  }

  public resetVehicles() {
  // TODO RESET ALL 
    // this.currentVehicle = null;
    // this.currentFerry = null;
    console.log(this.currentVehicle);
  }
}
