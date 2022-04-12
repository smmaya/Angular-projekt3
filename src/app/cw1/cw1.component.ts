import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cw1',
  templateUrl: './cw1.component.html',
  styleUrls: ['./cw1.component.scss']
})
export class Cw1Component implements OnInit {

  inputText = 'Moj input';
  zmienKolor = 'color-black';
  isDisabled = true;

  zmienUstawienia() {
    this.isDisabled = false;
  }
  onFocus() {
    this.zmienKolor = 'color-brown';
  }
  onClick(event: any) {
    console.log(event);
  }
  onMouseMove(event: any) {
    console.log('punktX: ' + event.clientX + ' punktY: ' + event.clientY);
  }
  onPaste() {
    this.inputText = 'Wklejanie zabronione!';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
