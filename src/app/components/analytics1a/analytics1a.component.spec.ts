import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analytics1aComponent } from './analytics1a.component';

describe('Analytics1aComponent', () => {
  let component: Analytics1aComponent;
  let fixture: ComponentFixture<Analytics1aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Analytics1aComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Analytics1aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
