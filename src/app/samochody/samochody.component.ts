import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Samochod } from '../samochod';

@Component({
  selector: 'app-samochody',
  templateUrl: './samochody.component.html',
  styleUrls: ['./samochody.component.scss']
})
export class SamochodyComponent implements OnInit {

  tytul = 'Moje Samochody:'
  @Input() samochodyItems: Samochod[] = [];
  @Output() usunSamochod: EventEmitter<number> = new EventEmitter<number>();
  @Output() addSamochod: EventEmitter<Samochod> = new EventEmitter<Samochod>();

  samochod: Samochod = new Samochod();

  ngOnInit(): void { }

  usunAuto(index: number) {
    this.usunSamochod.emit(index);
  }

  dodajAuto() {
    this.addSamochod.emit(this.samochod);
    this.samochod = new Samochod();
  }
}
