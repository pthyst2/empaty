import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/utilities/form.service';
import { AuthService } from 'src/app/services/data/auth.service';
import { UserService } from 'src/app/services/data/user.service';
import { TranslateService } from '@ngx-translate/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
@Component({
  selector: 'page-member-profile',
  templateUrl: './page-member-profile.component.html',
  styleUrls: ['./page-member-profile.component.sass'],
})
export class PageMemberProfileComponent implements OnInit, OnDestroy {
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  user: any;
  basicInfo: any = {
    loading: false,
    edit: false,
    form: this.fb.group({
      id: ['', [Validators.required]],
      fullname: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: [''],
    }),
    submitted: false,
  };

  loginInfo: any = {
    loading: false,
    edit: false,
    form: this.fb.group({
      id: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    }),
    submitted: false,
    shows: {
      currentPassword: false,
      newPassword: false,
      confirmPassword: false,
    },
  };
  popup: any = {
    show: false,
    icon: 'success',
    title: '',
    html: '',
    timer: undefined
  }
  subs = new Subscription();
  constructor(
    private fb: FormBuilder,
    public fs: FormService,
    private authService: AuthService,
    private userService: UserService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  getUser() {
    this.basicInfo.loading = true;
    this.loginInfo.loading = true;
    this.subs.add(
      this.authService.getUserInfo().subscribe({
        next: (res: any) => {
          this.user = res.data.userInfo;
          this.setFormsValue();
          this.basicInfo.loading = false;
          this.loginInfo.loading = false;
        },
        error: (err) => {
          console.error(err);
        },
      })
    );
  }
  setFormsValue() {
    if (this.user) {
      this.setForm1Value();
      this.setForm2Value();
    }
  }

  toggleForm(section: any) {
    switch (section) {
      case 'basic': {
        this.basicInfo.edit = !this.basicInfo.edit;
        this.setForm1Value();
        break;
      }
      case 'login': {
        this.loginInfo.edit = !this.loginInfo.edit;
        this.setForm2Value();
        break;
      }
    }

  }
  get form1() {
    return this.basicInfo.form;
  }
  get ctr1() {
    return this.form1.controls;
  }

  setForm1Value() {
    this.ctr1.id.setValue(this.user.id);
    this.ctr1.fullname.setValue(this.user.fullname);
    this.ctr1.phone.setValue(this.user.phone);
    this.ctr1.address.setValue(this.user.address);
  }
  submitForm1() {
    this.basicInfo.submitted = true;
    if (this.form1.valid) {
      let input: any = {
        fullname: this.ctr1.fullname.value,
        phone: this.ctr1.phone.value,
        address: this.ctr1.address.value,
        token: localStorage.getItem('token'),
      };
      this.subs.add(
        this.userService.updateBasicInfo(input).subscribe({
          next: (res: any) => {
            this.popup = {
              show: true,
              icon: 'success',
              title: 'Basic infomation updated',
              timer: 1500,
            }
            this.subs.add(this.translate.get('popups.titles.success-basic-update').subscribe(
              (res: any) => {
                this.popup.title = res
              }
            ))
            this.basicInfo.edit = false;
            setTimeout(() => window.location.reload(), 1500);
          },
          error: (err) => {
            this.popup = {
              show: true,
              icon: 'error',
              title: "Update basic info failed",
              html: 'Err: ' + err,
            }
            this.subs.add(this.translate.get('popups.titles.fail-basic-update').subscribe(
              (res: any) => {
                this.popup.title = res
              }
            ))
            this.subs.add(this.translate.get('popups.htmls.error').subscribe(
              (res: any) => {
                this.popup.html = res + ": " + err
              }
            ))
            console.error(err);
          },
        })
      );
    } else {
      this.popupMissing();
    }
  }

  popupMissing() {
    this.popup = {
      show: true,
      icon: 'error',
      title: 'Invalid or missing info',
      html: 'Please check all information and try again.',
    }
    this.subs.add(this.translate.get('popups.titles.invalid').subscribe(
      (res: any) => {
        this.popup.title = res
      }
    ));
    this.subs.add(this.translate.get('popups.htmls.check-and-try-again').subscribe(
      (res: any) => {
        this.popup.html = res
      }
    ))
  }

  get form2() {
    return this.loginInfo.form;
  }
  get ctr2() {
    return this.form2.controls;
  }
  setForm2Value() {
    this.ctr2.id.setValue(this.user.id);
    this.ctr2.email.setValue(this.user.email);
  }
  submitForm2() {
    this.loginInfo.submitted = true;
    let confirm: any = this.ctr2.confirmPassword.value;
    let newpass: any = this.ctr2.newPassword.value;
    if (confirm && newpass) {
      if (confirm != newpass) {
        this.ctr2.confirmPassword.setErrors({ matched: true });
      }
      else {
        this.ctr2.confirmPassword.setErrors(null);
      }
    }
    if (this.form2.valid) {
      let input: any = {
        oldPassword: this.ctr2.currentPassword.value,
        newPassword: this.ctr2.newPassword.value,
        confirmPassword: this.ctr2.confirmPassword.value,
        token: localStorage.getItem('token'),
      };
      this.subs.add(
        this.userService.updateLoginInfo(input).subscribe({
          next: (res: any) => {
            this.popup = {
              show: true,
              icon: 'success',
              title: 'Login infomation updated',
              timer: 1500,
            }

            this.subs.add(this.translate.get('popups.titles.success-login-update').subscribe(
              (res: any) => {
                this.popup.title = res
              }
            ))

            this.loginInfo.edit = false;
            setTimeout(() => window.location.reload(), 1500);
          },
          error: (err) => {
            this.popup = {
              show: true,
              icon: 'error',
              title: "Update login info failed",
              html: 'Err: ' + err,
            }
            this.subs.add(this.translate.get('popups.titles.fail-login-update').subscribe(
              (res: any) => {
                this.popup.title = res
              }
            ))
            this.subs.add(this.translate.get('popups.htmls.error').subscribe(
              (res: any) => {
                this.popup.html = res + ": " + err
              }
            ))
            console.error(err);
          },
        })
      );
    } else {
      this.popupMissing();
    }
  }
}
