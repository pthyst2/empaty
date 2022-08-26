import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

//#region Services
import { AuthService } from 'src/app/services/data/auth.service';
import { PopupMessageService } from 'src/app/services/utilities/popup-message.service';
import { SeoService } from 'src/app/services/utilities/seo.service';
import { TranslateService } from '@ngx-translate/core';
//#endregion
@Component({
  selector: 'page-forgot-password',
  templateUrl: './page-forgot-password.component.html',
  styleUrls: ['./page-forgot-password.component.sass'],
})
export class PageForgotPasswordComponent implements OnInit, OnDestroy {
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  step1 = {
    active: true,
    title: 'Forgot password',
    form: this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    }),
    submitted: false,
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
    show: {
      newPassword: false,
      confirmPassword: false,
    },
  };
  popup: any = {
    show: false
  }
  subs = new Subscription();

  constructor(
    private authService: AuthService,
    private popupService: PopupMessageService,
    private fb: FormBuilder,
    private seo: SeoService,
    private router: Router,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.setSEO();
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
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

  closePopup() {
    setTimeout(
      () => {
        this.popup = {
          show: false
        }
      }, 1200
    )
  }

  invalidPopup() {
    this.popup = {
      show: true,
      icon: 'error',
      title: '',
      html: ''
    }
    this.subs.add(this.translate.get('popups.titles.invalid').subscribe({
      next: (res: any) => {
        this.popup.title = res
      }
    }))
    this.subs.add(this.translate.get('popups.htmls.check-and-try-again').subscribe({
      next: (res: any) => {
        this.popup.html = res
      }
    }))
    this.closePopup();
  }

  submitStep1() {
    this.step1.submitted = true;
    if (this.step1.form.valid) {
      let input = this.ctr1.email.value;
      this.subs.add(
        this.authService.sendResetCode(input).subscribe({
          next: (res: any) => {
            this.subs.add(this.translate.get('popups.titles.success-send-code').subscribe({
              next: (res: any) => {
                this.popup = {
                  show: true,
                  icon: 'success',
                  title: res
                }
              }
            }))
            this.step1.active = false;
            this.ctr2.email.setValue(input);
            this.step2.active = true;
            this.closePopup();
          },
          error: (err) => {
            console.error("Error when sending reset code: ", err);
            this.popup = {
              show: true,
              icon: 'error',
              title: '',
              html: ''
            }
            this.subs.add(this.translate.get('popups.titles.fail-send-code').subscribe({
              next: (res: any) => {
                this.popup.title = res
              }
            }))
            this.subs.add(this.translate.get('popups.htmls.error').subscribe({
              next: (res: any) => {
                this.popup.html = res + ": " + err
              }
            }))
            this.closePopup();
          },
        })
      );
    } else {
      this.invalidPopup()
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
      let data = this.step2.form.value;
      this.subs.add(
        this.authService
          .resetPassword({
            email: data.email,
            codeActive: data.resetCode,
            password: data.password,
          })
          .subscribe({
            next: (res: any) => {
              this.subs.add(this.translate.get('popups.titles.success-reset-password').subscribe({
                next: (res: any) => {
                  this.popup = {
                    show: true,
                    icon: 'success',
                    title: res
                  }
                }
              }))

              setTimeout(() => {
                this.router.navigate(['/auth/login']);
              }, 1200);
            },
            error: (err) => {
              console.error("Error when sending reset code: ", err);
              this.popup = {
                show: true,
                icon: 'error',
                title: '',
                html: ''
              }
              this.subs.add(this.translate.get('popups.titles.fail-reset-password').subscribe({
                next: (res: any) => {
                  this.popup.title = res
                }
              }))
              this.subs.add(this.translate.get('popups.htmls.error').subscribe({
                next: (res: any) => {
                  this.popup.html = res + ": " + err
                }
              }))
              this.closePopup();
            },
          })
      );
    } else {
      this.invalidPopup()
    }
  }
}
