import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditSpaceComponent } from './modal-edit-space.component';

describe('ModalEditSpaceComponent', () => {
  let component: ModalEditSpaceComponent;
  let fixture: ComponentFixture<ModalEditSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditSpaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
