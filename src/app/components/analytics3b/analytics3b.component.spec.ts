import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analytics3bComponent } from './analytics3b.component';

describe('Analytics3bComponent', () => {
  let component: Analytics3bComponent;
  let fixture: ComponentFixture<Analytics3bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Analytics3bComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Analytics3bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
