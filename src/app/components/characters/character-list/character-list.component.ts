import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersService } from 'src/app/core/services/characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: Observable<any>;

  constructor(
    private characterService: CharactersService
  ) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(){
    this.characters = this.characterService.getAllCharacters();
  }

}
