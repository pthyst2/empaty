import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialCreditCardComponent } from './partial-credit-card.component';

describe('PartialCreditCardComponent', () => {
  let component: PartialCreditCardComponent;
  let fixture: ComponentFixture<PartialCreditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialCreditCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
