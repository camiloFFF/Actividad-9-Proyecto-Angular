import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  imports: [CommonModule],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css'
})
export class CharacterDetailComponent {
  character: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`https://hp-api.onrender.com/api/character/${id}`)
      .subscribe((data: any) => {
        if (Array.isArray(data) && data.length > 0) {
          this.character = data[0];
          console.log('Datos del personaje:', this.character);
        }
      });
  }
}
