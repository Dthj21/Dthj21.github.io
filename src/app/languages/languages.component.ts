import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent {
  languages: Array<any> = [];

  ngOnInit(): void {
    let language1 = {
      nombre: "Español",
      nivel: "Nativo"
    };

    let language2 = {
      nombre: "Inglés",
      nivel: "Principiante (B1)"
    };

    this.languages.push(language1);
    this.languages.push(language2);
    console.log(this.languages);
  }
}
