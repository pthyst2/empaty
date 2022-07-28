import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteSpaceComponent } from './modal-delete-space.component';

describe('ModalDeleteSpaceComponent', () => {
  let component: ModalDeleteSpaceComponent;
  let fixture: ComponentFixture<ModalDeleteSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteSpaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDeleteSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
