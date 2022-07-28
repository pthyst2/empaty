import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMemberProductsComponent } from './page-member-products.component';

describe('PageMemberProductsComponent', () => {
  let component: PageMemberProductsComponent;
  let fixture: ComponentFixture<PageMemberProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMemberProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMemberProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
