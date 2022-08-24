import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePaymentCancelComponent } from './page-payment-cancel.component';

describe('PagePaymentCancelComponent', () => {
  let component: PagePaymentCancelComponent;
  let fixture: ComponentFixture<PagePaymentCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePaymentCancelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePaymentCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
