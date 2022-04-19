import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cw2',
  templateUrl: './cw2.component.html',
  styleUrls: ['./cw2.component.scss']
})
export class Cw2Component implements OnInit {

  imie = '';
  nazwisko = '';
  wiek = 75;
  result = '';

  onClick() {
    this.result = this.imie + ' ' + this.nazwisko + ' ' + this.wiek;
  }

  clearResult() {
    this.result = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
