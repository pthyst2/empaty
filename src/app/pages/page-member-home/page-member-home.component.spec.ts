import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMemberHomeComponent } from './page-member-home.component';

describe('PageMemberHomeComponent', () => {
  let component: PageMemberHomeComponent;
  let fixture: ComponentFixture<PageMemberHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMemberHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMemberHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
