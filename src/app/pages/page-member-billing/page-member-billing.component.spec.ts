import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMemberBillingComponent } from './page-member-billing.component';

describe('PageMemberBillingComponent', () => {
  let component: PageMemberBillingComponent;
  let fixture: ComponentFixture<PageMemberBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMemberBillingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMemberBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
