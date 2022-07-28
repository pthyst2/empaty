import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialItemCollaboratorComponent } from './partial-item-collaborator.component';

describe('PartialItemCollaboratorComponent', () => {
  let component: PartialItemCollaboratorComponent;
  let fixture: ComponentFixture<PartialItemCollaboratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialItemCollaboratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialItemCollaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
