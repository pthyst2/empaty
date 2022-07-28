import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPaySpaceComponent } from './modal-pay-space.component';

describe('ModalPaySpaceComponent', () => {
  let component: ModalPaySpaceComponent;
  let fixture: ComponentFixture<ModalPaySpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPaySpaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPaySpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
