import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cw4Component } from './cw4.component';

describe('Cw4Component', () => {
  let component: Cw4Component;
  let fixture: ComponentFixture<Cw4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cw4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cw4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
