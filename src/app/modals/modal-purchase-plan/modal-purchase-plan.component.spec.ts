import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPurchasePlanComponent } from './modal-purchase-plan.component';

describe('ModalPurchasePlanComponent', () => {
  let component: ModalPurchasePlanComponent;
  let fixture: ComponentFixture<ModalPurchasePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPurchasePlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPurchasePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
