import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMemberInvoiceDetailComponent } from './page-member-invoice-detail.component';

describe('PageMemberInvoiceDetailComponent', () => {
  let component: PageMemberInvoiceDetailComponent;
  let fixture: ComponentFixture<PageMemberInvoiceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMemberInvoiceDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMemberInvoiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
