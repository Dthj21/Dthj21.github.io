import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent {
  interests: Array<any> = [];

  ngOnInit(): void {
    let interest1 = {
      nombre: "Desarrollo de Software",
      descripcion: "Me interesa crear soluciones innovadoras y eficientes mediante el uso de tecnología."
    };

    let interest2 = {
      nombre: "Inteligencia Artificial",
      descripcion: "Exploro el aprendizaje automático y su aplicación en diversas industrias."
    };

    let interest3 = {
      nombre: "Ciclismo",
      descripcion: "Disfruto de realizar actividades al aire libre, en especial recorrer rutas en bicicleta."
    };

    let interest4 = {
      nombre: "Lectura",
      descripcion: "Me apasiona leer libros sobre tecnología, ciencia y filosofía."
    };

    this.interests.push(interest1);
    this.interests.push(interest2);
    this.interests.push(interest3);
    this.interests.push(interest4);
    console.log(this.interests);
  }
}
