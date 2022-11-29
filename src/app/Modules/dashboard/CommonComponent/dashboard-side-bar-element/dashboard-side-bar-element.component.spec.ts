import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSideBarElementComponent } from './dashboard-side-bar-element.component';

describe('DashboardSideBarElementComponent', () => {
  let component: DashboardSideBarElementComponent;
  let fixture: ComponentFixture<DashboardSideBarElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSideBarElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSideBarElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
