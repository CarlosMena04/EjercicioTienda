import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: []
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mostrar:Object[] = [
    { descripcion:"As a total tuning products manufacturer, we have deep and wide know-hows in the EXHAUST technology.", imagen:"./assets/img/img_01.jpg" },
    { descripcion:"HKS Intake technology allows users to achieve more power by reducing an airflow restriction in the engine air intake system.", imagen:"./assets/img/img_03.jpg" },
    { descripcion:"The electronic control devices will control the vehicles in a higher level for the best total tuning performance.", imagen:"./assets/img/img_04.jpg" },
    { descripcion:"HKS Super SQV (Sequential Blow Off Valve) uses a unique sequential valve structure and a differential pressure control system, which allows for a broad operating range from low boost to high boost.", imagen:"./assets/img/img_05.jpg" }
  ] 

  nextMostrar:Object[] = [
    { descripcion:"Cooling Technology brings out the implicit Engine Power.", imagen:"./assets/img/img_06.jpg" },
    { descripcion:"We continue working on turbines, optimising and selecting the right one for each vehicle and application.", imagen:"./assets/img/img_07.jpg" },
    { descripcion:"You need to upgrade the injector and fuel pump if you change or tune the turbine. HKS has specially designed 2 jet type injectors for each engine.", imagen:"./assets/img/img_09.jpg" },
    { descripcion:"It was designed to improve shift feeling, pedal pressure, and characteristics appear when the clutch is half engaged.", imagen:"./assets/img/img_11.jpg" }
  ]

}
