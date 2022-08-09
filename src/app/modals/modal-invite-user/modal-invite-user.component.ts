import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/utilities/form.service';
import { CollaboratorService } from 'src/app/services/data/collaborator.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'modal-invite-user',
  templateUrl: './modal-invite-user.component.html',
  styleUrls: ['./modal-invite-user.component.sass'],
})
export class ModalInviteUserComponent implements OnInit {
  @Input() show: boolean = false;
  @Output() closed = new EventEmitter();
  faTimes = faTimes;
  invite: any = {
    selects: {
      roles: [],
    },
    form: this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      inviteMessage: [''],
      role: ['', [Validators.required]],
    }),
    submitted: false,
    messages: {
      email: {
        required: 'Please enter email of the person you want to invite.',
        email: 'Invalid email.',
      },
      role: {
        required: 'Please select role.',
      },
    },
  };

  popup: any = {
    show: false,
    icon: '',
    title: '',
    html: '',
    timer: undefined,
  };

  constructor(
    private fb: FormBuilder,
    public fs: FormService,
    private collabService: CollaboratorService
  ) {}
  ngOnInit(): void {
    this.getRoles();
  }
  close(data?: any) {
    this.closed.emit(data ? data : false);
  }
  get form() {
    return this.invite.form;
  }
  get ctr() {
    return this.form.controls;
  }
  getRoles() {
    this.invite.selects.roles = this.collabService.getRoles().data;
  }

  submit() {
    this.invite.submitted = true;
    if (this.form.valid) {
      this.close(true);
      this.popup = {
        show: true,
        icon: 'success',
        title: 'Invite sent',
        timer: 1500,
      };
    } else {
      this.popup = {
        show: true,
        icon: 'error',
        title: 'Missing or invalid information',
        html: 'Please check all information and try again.',
      };
    }
  }
}
