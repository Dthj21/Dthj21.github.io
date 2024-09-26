import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  Education : Array<any> = [];
  ngOnInit(): void {
    let education = {
      universidad: "Universidad Veracruzana",
      fecha: "2018-present",
      ubicacion: "Ixtac, Ver.",
      facultad: "Negocios y tecnologias",
      carrera: "Ingenieria de Software ",
      grado: "5º semestre",
    };

    this.Education.push(education);
    console.log(this.Education);
  }
}
