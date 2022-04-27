import { Component } from '@angular/core';
import { Samochod } from './samochod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projekt3';
  studenci = ['Karol', 'Basia', 'Adam', 'Teresa', 'Wojciech', 'Ziemowit'];
  samochody: Samochod[] = [
    {
      marka: 'AUDI',
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
      model: 'KLASA G',
      rok: 2018
    },
    {
      marka: 'BMW',
      model: 'SERIA 3',
      rok: 2020
    },
    {
      marka: 'Nissan',
      model: '370z',
      rok: 2019
    }
  ];
  
}
