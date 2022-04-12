import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cw2Component } from './cw2.component';

describe('Cw2Component', () => {
  let component: Cw2Component;
  let fixture: ComponentFixture<Cw2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cw2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cw2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
