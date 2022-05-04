import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Openhouse2020Component } from './openhouse2020.component';

describe('Openhouse2020Component', () => {
  let component: Openhouse2020Component;
  let fixture: ComponentFixture<Openhouse2020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Openhouse2020Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Openhouse2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
