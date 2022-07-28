import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMemberOrderComponent } from './page-member-order.component';

describe('PageMemberOrderComponent', () => {
  let component: PageMemberOrderComponent;
  let fixture: ComponentFixture<PageMemberOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMemberOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMemberOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
