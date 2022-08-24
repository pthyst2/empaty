import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CollaboratorService } from 'src/app/services/data/collaborator.service';
import { AuthService } from 'src/app/services/data/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'modal-delete-user',
  templateUrl: './modal-delete-user.component.html',
  styleUrls: ['./modal-delete-user.component.sass'],
})
export class ModalDeleteUserComponent implements OnInit, OnDestroy {
  @Input() collaborator: any;
  @Input() show: boolean = false;
  @Output() closed = new EventEmitter();

  popup: any = {
    show: false,
    icon: 'success',
    title: 'Collaborator deleted',
    timer: undefined,
  };
  subs = new Subscription;
  constructor(
    private collabService: CollaboratorService,
    private authService: AuthService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void { }
  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }
  close(data?: any) {
    this.closed.emit(data ? data : false);
  }
  confirm() {
    let user: any = this.authService.getUserDecoded();
    let data = {
      user: user._id,
      collaborator: this.collaborator._id,
    };
    let res: any = this.collabService.deleteCollaborator(data);

    try {
      this.close(true);
      this.popup = {
        show: true,
        icon: 'success',
        title: 'User deleted',
        timer: 1500,
      };
      this.subs.add(this.translate.get('popups.titles.success-delete-user').subscribe(
        (res: any) => {
          this.popup.title = res
        }
      ))
    }
    catch (err) {
      this.popup = {
        show: true,
        icon: 'error',
        title: 'Delete user failed',
        html: 'Error: ' + err
      };
      this.subs.add(this.translate.get('popups.titles.fail-delete-user').subscribe(
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

  }
}
