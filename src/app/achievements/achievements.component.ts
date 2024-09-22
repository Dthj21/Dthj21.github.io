import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent {
  achievements: Array<any> = [];

  ngOnInit(): void {
    let achievement1 = {
      titulo: "Certificación en Python",
      descripcion: "Obtuve una certificación avanzada en Python por Google Coursera.",
      fecha: "Mayo 2023"
    };

    let achievement2 = {
      titulo: "Desarrollo de un Sistema de Control de Accesos",
      descripcion: "Diseñé e implementé un sistema de control de acceso automatizado para Corporativo Maxiaba.",
      fecha: "Enero 2024"
    };

    let achievement3 = {
      titulo: "Hackathon Universitario",
      descripcion: "Ganador del primer lugar en un hackathon enfocado en soluciones de IA.",
      fecha: "Octubre 2022"
    };

    this.achievements.push(achievement1);
    this.achievements.push(achievement2);
    this.achievements.push(achievement3);
    console.log(this.achievements);
  }
}
