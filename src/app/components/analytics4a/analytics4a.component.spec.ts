import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analytics4aComponent } from './analytics4a.component';

describe('Analytics4aComponent', () => {
  let component: Analytics4aComponent;
  let fixture: ComponentFixture<Analytics4aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Analytics4aComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Analytics4aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
