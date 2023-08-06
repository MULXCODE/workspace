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
  
  constructor(
    @Inject(VEHICLE_PROVIDER) private vehicleProvider: IVehicleProvider
  ) {}

  public getVehicle() {
    this.currentVehicle = this.vehicleProvider.GetVehicle();
    console.log(this.currentVehicle);
  }
  public assignVehicle() {
    // this.currentVehicle = this.vehicleProvider.GetVehicle();
    console.log(this.currentVehicle);
  }
  public resetVehicles() {
    // this.currentVehicle = this.vehicleProvider.GetVehicle();
    console.log(this.currentVehicle);
  }
}
