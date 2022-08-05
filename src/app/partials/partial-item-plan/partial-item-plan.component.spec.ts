import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialItemPlanComponent } from './partial-item-plan.component';

describe('PartialItemPlanComponent', () => {
  let component: PartialItemPlanComponent;
  let fixture: ComponentFixture<PartialItemPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialItemPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialItemPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
