import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideyournosesComponent } from './hideyournoses.component';

describe('HideyournosesComponent', () => {
  let component: HideyournosesComponent;
  let fixture: ComponentFixture<HideyournosesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HideyournosesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HideyournosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
