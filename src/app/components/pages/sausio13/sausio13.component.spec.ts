import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sausio13Component } from './sausio13.component';

describe('Sausio13Component', () => {
  let component: Sausio13Component;
  let fixture: ComponentFixture<Sausio13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sausio13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sausio13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
