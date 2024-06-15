import { Component } from '@angular/core';

@Component({
  selector: 'app-halmazallapot',
  templateUrl: './halmazallapot.component.html',
  styleUrl: './halmazallapot.component.css'
})
export class HalmazallapotComponent {
 vizsgaltErtek!:number;
 uzenet!:string;
 halmazAllapotVizsgalo():void{
  if(this.vizsgaltErtek==null){
    alert("Nincs megadva vizsgálandó hőfok!");
  }
  else{
    if(this.vizsgaltErtek<0){
      this.uzenet="A víz halmazállapota szilárd " + this.vizsgaltErtek + " °C-on!"
    }
    else if(this.vizsgaltErtek==0 || this.vizsgaltErtek==100){
      this.uzenet="A víz halmazállapot változáson megy keresztül " + this.vizsgaltErtek + " °C-on!"
    }
    else if(this.vizsgaltErtek>0 && this.vizsgaltErtek<100){
      this.uzenet="A víz halmazállapota folyékony " + this.vizsgaltErtek + " °C-on!"
    }
    else {
    this.uzenet="A víz halmazállapota légnemű " + this.vizsgaltErtek + " °C-on!"
    }
  }
 }

 vizsgaltAllapot:string = "szilárd";
 uzenetHalmaz!:string;
 homersekeltVizsgalo(): void {
  if (this.vizsgaltAllapot == null) {
    alert("Nincs kiválasztott halmazállapot!");
  } else {
    if (this.vizsgaltAllapot === "szilárd") {
      this.uzenetHalmaz = "A " + this.vizsgaltAllapot + " halmazállapot szerint a víz 0 °C alatti!";
    } else if (this.vizsgaltAllapot === "folyékony") {
      this.uzenetHalmaz = "A " + this.vizsgaltAllapot + " halmazállapot szerint a víz 0 és 100 °C közötti!";
    } else if (this.vizsgaltAllapot === "légnemű") {
      this.uzenetHalmaz = "A " + this.vizsgaltAllapot + " halmazállapot szerint a víz 100 °C feletti!";
    } else if (this.vizsgaltAllapot === "változó") {
      this.uzenetHalmaz = "A " + this.vizsgaltAllapot + " halmazállapot szerint a víz 0 vagy 100 °C fokos!";
    } else {
      this.uzenetHalmaz = "Ismeretlen halmazállapot!";
    }
  }
}

celsius: number = 0;
fahrenheit: number = 32;

FahrenheitAtvalto(): void {
  this.fahrenheit = Number(((this.celsius * 9 / 5) + 32).toFixed(2));
}
}
