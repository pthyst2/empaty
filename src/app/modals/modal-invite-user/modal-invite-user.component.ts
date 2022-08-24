import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/utilities/form.service';
import { CollaboratorService } from 'src/app/services/data/collaborator.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'modal-invite-user',
  templateUrl: './modal-invite-user.component.html',
  styleUrls: ['./modal-invite-user.component.sass'],
})
export class ModalInviteUserComponent implements OnInit, OnDestroy {
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
    submitted: false
  };

  popup: any = {
    show: false,
    icon: '',
    title: '',
    html: '',
    timer: undefined,
  };
  subs = new Subscription;

  constructor(
    private fb: FormBuilder,
    public fs: FormService,
    private collabService: CollaboratorService,
    private translate: TranslateService
  ) { }
  ngOnInit(): void {
    this.getRoles();
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
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
      try {
        this.close(true);
        this.popup = {
          show: true,
          icon: 'success',
          title: 'Invite sent',
          timer: 1200,
        };
        this.subs.add(this.translate.get('popups.titles.success-invite').subscribe(
          (res: any) => {
            this.popup.title = res
          }
        ))
      }
      catch (err) {
        this.popup = {
          show: true,
          icon: 'error',
          title: 'Send invite failed',
          html: "Error: " + err
        }
        this.subs.add(this.translate.get('popups.titles.fail-invite').subscribe(
          (res: any) => {
            this.popup.title = res
          }
        ));
        this.subs.add(this.translate.get('popups.htmls.error').subscribe(
          (res: any) => {
            this.popup.html = res + ": " + err
          }
        ))
      }

    } else {
      this.popup = {
        show: true,
        icon: 'error',
        title: 'Missing or invalid information',
        html: 'Please check all information and try again.',
      };
      this.subs.add(this.translate.get('popups.titles.invalid').subscribe(
        (res: any) => {
          this.popup.title = res
        }
      ));
      this.subs.add(this.translate.get('popups.htmls.check-and-try-again').subscribe(
        (res: any) => {
          this.popup.html = res
        }
      ));
    }
  }
}
