import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMemberManageComponent } from './page-member-manage.component';

describe('PageMemberManageComponent', () => {
  let component: PageMemberManageComponent;
  let fixture: ComponentFixture<PageMemberManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMemberManageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMemberManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
