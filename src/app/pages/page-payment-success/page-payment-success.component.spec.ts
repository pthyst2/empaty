import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePaymentSuccessComponent } from './page-payment-success.component';

describe('PagePaymentSuccessComponent', () => {
  let component: PagePaymentSuccessComponent;
  let fixture: ComponentFixture<PagePaymentSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePaymentSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePaymentSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
