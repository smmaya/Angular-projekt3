import { Component, OnInit, Input } from '@angular/core';
import { Samochod } from '../samochod';

@Component({
  selector: 'app-samochody',
  templateUrl: './samochody.component.html',
  styleUrls: ['./samochody.component.scss']
})
export class SamochodyComponent implements OnInit {

  @Input() samochodyItems: Samochod[] = [];

  tytul = 'Moje Samochody:'

  constructor() { 
  }

  ngOnInit(): void {
  }

}
