import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialListCollaboratorsComponent } from './partial-list-collaborators.component';

describe('PartialListCollaboratorsComponent', () => {
  let component: PartialListCollaboratorsComponent;
  let fixture: ComponentFixture<PartialListCollaboratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialListCollaboratorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialListCollaboratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
