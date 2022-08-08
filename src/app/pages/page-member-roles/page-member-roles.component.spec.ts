import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMemberRolesComponent } from './page-member-roles.component';

describe('PageMemberRolesComponent', () => {
  let component: PageMemberRolesComponent;
  let fixture: ComponentFixture<PageMemberRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMemberRolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMemberRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
