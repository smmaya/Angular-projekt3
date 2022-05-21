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
      new Samochod('Audi', 'RS7', 2020),
      new Samochod('BMW', 'Seria 3', 2021),
      new Samochod('Mercedes', 'Seria 3', 2017),
      new Samochod('Austin', 'Martin', 2003),
      new Samochod('Nissan', 'Patrol', 1998)
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
    
    let areObjectEquals = (obj1: Samochod) =>
      obj1.marka === samochod.marka &&
      obj1.model === samochod.model &&
      obj1.rok === +samochod.rok;

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
