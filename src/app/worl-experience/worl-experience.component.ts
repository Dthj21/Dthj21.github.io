import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-worl-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './worl-experience.component.html',
  styleUrl: './worl-experience.component.css'
})
export class WorlExperienceComponent {
  workExperience : Array<any> = [];
  ngOnInit(): void {
    let work1 = {
      fecha: "2018-present",
      ubicacion: "Ixtac, Ver.",
      puesto: "CEO",
      empresa: "Empresas UV",
      logros: [
        { descripcion: "Construyendo un ERP en la nube de google"},
        { descripcion : "Creacion de un cluster en hadoopy spark"}
      ]
    };

    let work2 = {
      fecha: "2018-present",
      ubicacion: "Cordoba, Ver.",
      puesto: "CEO",
      empresa: "Empresas TEC",
      logros: [
        { descripcion: "Construyendo un ERP en la nube de google"},
        { descripcion : "Creacion de un dron autonomo"}
      ]
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);
    console.log(this.workExperience);
  }

}
