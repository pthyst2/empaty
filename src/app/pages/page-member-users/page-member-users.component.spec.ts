import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMemberUsersComponent } from './page-member-users.component';

describe('PageMemberUsersComponent', () => {
  let component: PageMemberUsersComponent;
  let fixture: ComponentFixture<PageMemberUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMemberUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMemberUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
