import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analytics1bComponent } from './analytics1b.component';

describe('Analytics1bComponent', () => {
  let component: Analytics1bComponent;
  let fixture: ComponentFixture<Analytics1bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Analytics1bComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Analytics1bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
