import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgDashboardComponent } from './lg-dashboard.component';

describe('LgDashboardComponent', () => {
  let component: LgDashboardComponent;
  let fixture: ComponentFixture<LgDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LgDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
