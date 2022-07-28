import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddCollaboratorComponent } from './modal-add-collaborator.component';

describe('ModalAddCollaboratorComponent', () => {
  let component: ModalAddCollaboratorComponent;
  let fixture: ComponentFixture<ModalAddCollaboratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddCollaboratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddCollaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
