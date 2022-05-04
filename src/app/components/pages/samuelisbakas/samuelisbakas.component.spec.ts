import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamuelisbakasComponent } from './samuelisbakas.component';

describe('SamuelisbakasComponent', () => {
  let component: SamuelisbakasComponent;
  let fixture: ComponentFixture<SamuelisbakasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamuelisbakasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamuelisbakasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
