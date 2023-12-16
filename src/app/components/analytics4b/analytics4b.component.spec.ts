import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analytics4bComponent } from './analytics4b.component';

describe('Analytics4bComponent', () => {
  let component: Analytics4bComponent;
  let fixture: ComponentFixture<Analytics4bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Analytics4bComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Analytics4bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
