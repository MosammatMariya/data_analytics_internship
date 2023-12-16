import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analytics2aComponent } from './analytics2a.component';

describe('Analytics2aComponent', () => {
  let component: Analytics2aComponent;
  let fixture: ComponentFixture<Analytics2aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Analytics2aComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Analytics2aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
