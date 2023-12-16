import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analytics3aComponent } from './analytics3a.component';

describe('Analytics3aComponent', () => {
  let component: Analytics3aComponent;
  let fixture: ComponentFixture<Analytics3aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Analytics3aComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Analytics3aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
