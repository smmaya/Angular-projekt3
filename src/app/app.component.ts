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
  samochody: Samochod[] = [];
  isCreated = false;
  isInArray = false;

  ngOnInit(): void {
    this.studenci = ['Karol', 'Basia', 'Adam', 'Teresa', 'Wojciech', 'Ziemowit'];
    this.samochody = [
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
    
    var areObjectEquals = (obj1) =>
      obj1.marka === samochod.marka &&
      obj1.model === samochod.model &&
      obj1.rok === samochod.rok;

    if (this.samochody.some(areObjectEquals, samochod.marka && samochod.model && samochod.rok)) {
      this.isInArray = true;
    }
    else {
      this.isInArray = false;
      this.samochody.push(samochod);
    }

  }
  onUsunSamochod(index: number) {
    this.isInArray = false;
    this.samochody.splice(index, 1);
  }
}
