import { Component, Input, OnInit } from '@angular/core';
import { Ingred } from 'src/app/models/ingred';

@Component({
  selector: '.app-ingred',
  templateUrl: './ingred.component.html',
  styleUrls: ['./ingred.component.css']
})
export class IngredComponent implements OnInit {
  @Input() ingred: Ingred;
  constructor() { }

  ngOnInit(): void {
  }

}
