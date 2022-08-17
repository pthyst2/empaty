import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateSpaceByEditorComponent } from './modal-create-space-by-editor.component';

describe('ModalCreateSpaceByImageComponent', () => {
  let component: ModalCreateSpaceByEditorComponent;
  let fixture: ComponentFixture<ModalCreateSpaceByEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalCreateSpaceByEditorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCreateSpaceByEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
