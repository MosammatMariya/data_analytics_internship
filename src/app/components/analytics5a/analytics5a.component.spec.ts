import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analytics5aComponent } from './analytics5a.component';

describe('Analytics5aComponent', () => {
  let component: Analytics5aComponent;
  let fixture: ComponentFixture<Analytics5aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Analytics5aComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Analytics5aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
