import { Component, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { ModalBaseComponent } from '../modal-base/modal-base.component';
import { FormBuilder, Validators } from '@angular/forms';
import { PopupMessageService } from 'src/app/services/utilities/popup-message.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'modal-add-collaborator',
  templateUrl: './modal-add-collaborator.component.html',
  styleUrls: ['./modal-add-collaborator.component.sass'],
})
export class ModalAddCollaboratorComponent extends ModalBaseComponent implements OnDestroy {
  @Output() override closed = new EventEmitter<any>;
  @Input() space: any = '';
  @Input() collaborators: any = [];
  @Input() override static: boolean = false;

  form = this.fb.group({
    space: ['', [Validators.required]],
    email: ['', [Validators.required]],
    role: ['view']
  })
  submitted: boolean = false;
  subs = new Subscription();

  popup: any = {
    show: false,
    icon: 'success',
    title: '',
    html: '',
    timer: undefined
  }

  constructor(private fb: FormBuilder, private translate: TranslateService) {
    super()
  }
  override ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  override close() {
    this.closed.emit(false)
  }

  get ctr() {
    return this.form.controls
  }

  isCtrInvalid(control: any) {
    return (control.dirty || this.submitted) && control.invalid
  }
  submitForm() {
    this.submitted = true;
    this.ctr.space.setValue(this.space.id);
    console.log("this.form.value: ", this.form.value);
    if (this.form.valid) {

      this.subs.add(
        this.translate.get("popups.titles.success-add-collaborator").subscribe(
          (res: any) => {
            this.popup = {
              show: true,
              icon: 'success',
              title: res,
              html: '',
              timer: 1500
            }
            setTimeout(
              () => {
                this.closed.emit(true);
              }, 1500
            )
          }
        )
      )

    }
    else {
      this.popup = {
        show: true,
        icon: 'error',
        title: '',
        html: '',
        timer: undefined
      }
      this.subs.add(
        this.translate.get("popups.titles.invalid").subscribe(
          (res: any) => { this.popup.title = res }
        )
      )
      this.subs.add(
        this.translate.get("popups.htmls.check-and-try-again").subscribe(
          (res: any) => { this.popup.html = res }
        )
      )
    }
  }
}
