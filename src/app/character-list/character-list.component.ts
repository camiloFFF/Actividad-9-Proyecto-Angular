import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-character-list',
  imports: [RouterLink, CommonModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})

export class CharacterListComponent {
  characters: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://hp-api.onrender.com/api/characters')
      .subscribe((data: any) => {
        this.characters = data;
      });
  }
}
