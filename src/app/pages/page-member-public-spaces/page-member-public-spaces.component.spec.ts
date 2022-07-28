import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMemberPublicSpacesComponent } from './page-member-public-spaces.component';

describe('PageMemberPublicSpacesComponent', () => {
  let component: PageMemberPublicSpacesComponent;
  let fixture: ComponentFixture<PageMemberPublicSpacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMemberPublicSpacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMemberPublicSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
