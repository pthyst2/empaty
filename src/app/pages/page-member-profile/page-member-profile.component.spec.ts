import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMemberProfileComponent } from './page-member-profile.component';

describe('PageMemberProfileComponent', () => {
  let component: PageMemberProfileComponent;
  let fixture: ComponentFixture<PageMemberProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMemberProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMemberProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
