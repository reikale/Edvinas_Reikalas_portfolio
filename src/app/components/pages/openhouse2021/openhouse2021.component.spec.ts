import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Openhouse2021Component } from './openhouse2021.component';

describe('Openhouse2021Component', () => {
  let component: Openhouse2021Component;
  let fixture: ComponentFixture<Openhouse2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Openhouse2021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Openhouse2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
