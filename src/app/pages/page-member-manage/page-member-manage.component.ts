import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/utilities/form.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'page-member-manage',
  templateUrl: './page-member-manage.component.html',
  styleUrls: ['./page-member-manage.component.sass'],
})
export class PageMemberManageComponent implements OnInit {
  mockAccount: any = {
    _id: '0523187254abcdefgjkl',
    name: '株式会社オプティマイザー',
    vrShare: false,
  };

  accountInfo: any = {
    loading: false,
    edit: false,
    form: this.fb.group({
      _id: ['', [Validators.required]],
      name: ['', [Validators.required]],
    }),
    submitted: false,
  };

  vrInfo = this.fb.group({
    _id: ['', [Validators.required]],
    vrShare: [false],
  });

  popup: any = {
    title: 'Testing New Popup',
    html: 'This is new popup',
    icon: 'success',
    timer: undefined,
    show: false,
  };
  subs = new Subscription;

  constructor(private fb: FormBuilder, public fs: FormService, private translate: TranslateService) { }
  ngOnInit(): void {
    this.transferDataToForm();
  }
  get form1() {
    return this.accountInfo.form;
  }
  get ctr1() {
    return this.form1.controls;
  }
  get ctr2() {
    return this.vrInfo.controls;
  }
  submitForm1() {
    this.accountInfo.submitted = true;
    if (this.form1.valid) {
      this.popup = {
        title: 'Account info updated',
        timer: 1200,
        icon: 'success',
        show: true,
      };
      this.subs.add(this.translate.get('popups.titles.success-account-update').subscribe(
        (res: any) => {
          this.popup.title = res
        }
      ))
      setTimeout(
        () => {
          window.location.reload()
        }, 1200
      )
    } else {
      this.popup = {
        title: 'Invalid or missing information',
        html: 'Please check all information and try again.',
        icon: 'error',
        show: true,
      };
      this.subs.add(this.translate.get('popups.titles.invalid').subscribe(
        (res: any) => {
          this.popup.title = res
        }
      ));
      this.subs.add(this.translate.get('popups.htmls.error').subscribe(
        (res: any) => {
          this.popup.html = res
        }
      ))
    }
  }
  submitForm2() {
    this.popup = {
      icon: 'success',
      title: '',
      timer: 1200,
      show: true,
    };
    let value: any = this.ctr2.vrShare.value;
    if (value == 'on') {
      this.subs.add(this.translate.get('popups.titles.vr-on').subscribe(
        (res: any) => {
          this.popup.title = res
        }
      ))
    }
    else {
      this.subs.add(this.translate.get('popups.titles.vr-off').subscribe(
        (res: any) => {
          this.popup.title = res
        }
      ))
    }
    setTimeout(
      () => {
        window.location.reload()
      }, 1200
    )
  }
  transferDataToForm() {
    this.ctr1._id.setValue(this.mockAccount._id);
    this.ctr1.name.setValue(this.mockAccount.name);
    this.ctr2._id.setValue(this.mockAccount._id);
    this.ctr2.vrShare.setValue(this.mockAccount.vrShare);
  }
}
