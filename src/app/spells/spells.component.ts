import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-spells',
  imports: [CommonModule],
  templateUrl: './spells.component.html',
  styleUrl: './spells.component.css'
})
export class SpellsComponent {
  spells: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Obtener la lista de hechizos desde la API
    this.http.get<any[]>('https://hp-api.onrender.com/api/spells')
      .subscribe(data => {
        this.spells = data;
        console.log(this.spells);  
      });
  }
}
