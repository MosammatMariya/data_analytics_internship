import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analytics2bComponent } from './analytics2b.component';

describe('Analytics2bComponent', () => {
  let component: Analytics2bComponent;
  let fixture: ComponentFixture<Analytics2bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Analytics2bComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Analytics2bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
