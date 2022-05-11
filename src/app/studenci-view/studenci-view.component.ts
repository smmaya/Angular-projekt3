import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-studenci-view',
  templateUrl: './studenci-view.component.html',
  styleUrls: ['./studenci-view.component.scss']
})
export class StudenciViewComponent implements OnInit {

  @Input() studenciItems: string[] = [];
  @Output() usunUcznia: EventEmitter<number> = new EventEmitter<number>();
  @Output() dodajUcznia: EventEmitter<string> = new EventEmitter<string>();
  
  student: string;

  ngOnInit(): void { }

  usunStudenta(index: number) {
    this.usunUcznia.emit(index);
  }

  dodajStudenta() {
    this.dodajUcznia.emit(this.student);
    this.student = '';
  }
}

