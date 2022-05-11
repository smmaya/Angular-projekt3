import { Component } from '@angular/core';
import { Samochod } from './samochod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projekt3';
  studenci: string[];
  isCreated = false;

  samochody: Samochod[] = [
    {
      marka: 'Audi',
      model: 'RS7',
      rok: 2020
    },
    {
      marka: 'Mercedes',
      model: 'GT',
      rok: 1998
    },
    {
      marka: 'Mercedes',
      model: 'Klasa G',
      rok: 2018
    },
    {
      marka: 'BMW',
      model: 'Seria 3',
      rok: 2020
    },
    {
      marka: 'Nissan',
      model: '370z',
      rok: 2019
    }
  ];

  ngOnInit(): void {
    this.studenci = ['Karol', 'Basia', 'Adam', 'Teresa', 'Wojciech', 'Ziemowit'];
  }

  onAddStudent(student: string) {
    if (this.studenci.includes(student)) {
      this.isCreated = true;
    }
    else {
      this.isCreated = false;
      this.studenci.push(student);
    }
  }
  onUsunStudent(index: number) {
    this.isCreated = false;
    this.studenci.splice(index, 1);
  }

  onAddSamochod(samochod: Samochod) {
    if (this.samochody.includes(samochod)) {
      this.isCreated = true;
    }
    else {
      this.isCreated = false;
      this.samochody.push(samochod);
    }
  }
  onUsunSamochod(index: number) {
    this.isCreated = false;
    this.samochody.splice(index, 1);
  }
}
