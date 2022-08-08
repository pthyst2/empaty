import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInviteUserComponent } from './modal-invite-user.component';

describe('ModalInviteUserComponent', () => {
  let component: ModalInviteUserComponent;
  let fixture: ComponentFixture<ModalInviteUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInviteUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalInviteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
