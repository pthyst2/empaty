import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditCollaboratorComponent } from './modal-edit-collaborator.component';

describe('ModalEditCollaboratorComponent', () => {
  let component: ModalEditCollaboratorComponent;
  let fixture: ComponentFixture<ModalEditCollaboratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditCollaboratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditCollaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
