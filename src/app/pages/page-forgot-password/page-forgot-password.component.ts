import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

//#region Services
import { AuthService } from 'src/app/services/data/auth.service';
import { PopupMessageService } from 'src/app/services/utilities/popup-message.service';
import { SeoService } from 'src/app/services/utilities/seo.service';
//#endregion
@Component({
  selector: 'page-forgot-password',
  templateUrl: './page-forgot-password.component.html',
  styleUrls: ['./page-forgot-password.component.sass'],
})
export class PageForgotPasswordComponent implements OnInit {
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  step1 = {
    active: true,
    title: 'Forgot password',
    form: this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    }),
    submitted: false,
    messages: {
      email: {
        required: 'Email cannot be empty.',
        email: 'Email is invalid.',
      },
    },
  };

  step2 = {
    active: false,
    title: 'Forgot password',
    form: this.fb.group({
      email: ['', [Validators.required]],
      resetCode: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    }),
    submitted: false,
    messages: {
      resetCode: {
        required:
          'Reset code cannot be empty. Please check again in your mailbox.',
      },
      password: {
        required: 'New password cannot be empty.',
      },
      confirmPassword: {
        required: 'Please confirm your new password.',
        matched: "Confirm password don't match with new password.",
      },
    },
    show: {
      newPassword: false,
      confirmPassword: false,
    },
  };

  constructor(
    private authService: AuthService,
    private popupService: PopupMessageService,
    private fb: FormBuilder,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.setSEO();
  }
  setSEO() {
    this.seo.setTitle('Forgot Password');
  }
  get ctr1() {
    return this.step1.form.controls;
  }
  get ctr2() {
    return this.step2.form.controls;
  }

  submitStep1() {
    this.step1.submitted = true;
    if (this.step1.form.valid) {
      try {
        let data = this.step1.form.value;
        let res = this.authService.sendResetCode(data);
        if (res.status == 200) {
          this.popupService.success({
            title: 'Reset code sent',
            html: 'Please check your mailbox',
          });
          setTimeout(() => {
            this.step1.active = false;
            this.ctr2.email.setValue(this.ctr1.email.value);
            this.step2.active = true;
          }, 1000);
        }
      } catch (err) {
        this.popupService.error({
          title: 'Can\t send reset code',
          html: err,
        });
      }
    } else {
      this.popupService.error({
        title: "Can't send reset code",
        html: 'Please check all information and try again.',
      });
    }
  }

  submitStep2() {
    this.step2.submitted = true;

    if (this.ctr2.password.value != this.ctr2.confirmPassword.value) {
      this.ctr2.confirmPassword.setErrors({ matched: true });
    } else {
      this.ctr2.confirmPassword.setErrors(null);
    }

    if (this.step2.form.valid) {
      try {
        let data = this.step2.form.value;
        let res = this.authService.resetPassword(data);
        if (res.status == 200) {
          this.popupService.success({
            title: 'Reset password successfully',
            html: 'Redirecting to login page...',
          });
          setTimeout(() => {
            window.location.assign('auth/login');
          }, 2000);
        }
      } catch (err) {
        this.popupService.error({
          title: 'Reset password failed',
          html: err,
        });
      }
    } else {
      this.popupService.error({
        title: "Can't reset password",
        html: 'Please check all information and try again.',
      });
    }
  }
}
