import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialTableProductsComponent } from './partial-table-products.component';

describe('PartialTableProductsComponent', () => {
  let component: PartialTableProductsComponent;
  let fixture: ComponentFixture<PartialTableProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialTableProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialTableProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
