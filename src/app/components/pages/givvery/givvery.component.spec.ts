import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GivveryComponent } from './givvery.component';

describe('GivveryComponent', () => {
  let component: GivveryComponent;
  let fixture: ComponentFixture<GivveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GivveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GivveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
