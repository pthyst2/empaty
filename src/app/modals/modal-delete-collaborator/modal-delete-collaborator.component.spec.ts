import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteCollaboratorComponent } from './modal-delete-collaborator.component';

describe('ModalDeleteCollaboratorComponent', () => {
  let component: ModalDeleteCollaboratorComponent;
  let fixture: ComponentFixture<ModalDeleteCollaboratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteCollaboratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDeleteCollaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
