import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input() char:any;

  constructor() { }

  ngOnInit(): void {
  }

}
