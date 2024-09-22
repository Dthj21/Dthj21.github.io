import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Array<any> = [];
  
  ngOnInit(): void {
    let skill1 = {
      categoria: "Habilidades Técnicas",
      items: [
        { descripcion: "Programación en Python, SQL, JavaScript" },
        { descripcion: "Bases de datos: PostgreSQL, diseño y optimización" },
        { descripcion: "Patrones de diseño: Singleton, Facade, Observer" },
        { descripcion: "Control de versiones: Git, GitHub" }
      ]
    };

    let skill2 = {
      categoria: "Competencias Personales",
      items: [
        { descripcion: "Trabajo en equipo y colaboración" },
        { descripcion: "Resolución de problemas complejos" },
        { descripcion: "Creatividad e innovación en proyectos de software" },
        { descripcion: "Pensamiento crítico y analítico" }
      ]
    };

    this.skills.push(skill1);
    this.skills.push(skill2);
    console.log(this.skills);
  }
}
