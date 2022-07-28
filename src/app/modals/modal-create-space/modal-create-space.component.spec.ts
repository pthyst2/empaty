import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateSpaceComponent } from './modal-create-space.component';

describe('ModalCreateSpaceComponent', () => {
  let component: ModalCreateSpaceComponent;
  let fixture: ComponentFixture<ModalCreateSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateSpaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCreateSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
