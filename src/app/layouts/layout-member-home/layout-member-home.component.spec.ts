import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutMemberHomeComponent } from './layout-member-home.component';

describe('LayoutMemberHomeComponent', () => {
  let component: LayoutMemberHomeComponent;
  let fixture: ComponentFixture<LayoutMemberHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutMemberHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutMemberHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
