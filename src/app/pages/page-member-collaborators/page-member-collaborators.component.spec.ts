import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMemberCollaboratorsComponent } from './page-member-collaborators.component';

describe('PageMemberCollaboratorsComponent', () => {
  let component: PageMemberCollaboratorsComponent;
  let fixture: ComponentFixture<PageMemberCollaboratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMemberCollaboratorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMemberCollaboratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
