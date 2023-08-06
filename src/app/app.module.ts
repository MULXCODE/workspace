import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FerryTerminalComponent } from "./ferryterminal/ferry.terminal.component";
import { AppComponent } from "./app.component";
import { VehicleService } from "../services/vehicle.service";
import { VEHICLE_PROVIDER } from "src/interfaces/ivehicle.provider";

@NgModule({
  declarations: [AppComponent, FerryTerminalComponent],
  imports: [BrowserModule],
  providers: [{ provide: VEHICLE_PROVIDER, useClass: VehicleService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
