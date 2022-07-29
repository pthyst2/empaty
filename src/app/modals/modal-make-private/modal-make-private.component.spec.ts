import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMakePrivateComponent } from './modal-make-private.component';

describe('ModalMakePrivateComponent', () => {
  let component: ModalMakePrivateComponent;
  let fixture: ComponentFixture<ModalMakePrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMakePrivateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalMakePrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
