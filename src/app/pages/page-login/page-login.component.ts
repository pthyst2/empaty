import { Component, OnDestroy, OnInit } from '@angular/core';
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
  selector: 'page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.sass'],
})
export class PageLoginComponent implements OnInit, OnDestroy {
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  showPassword: boolean = false;
  formSubmitted: boolean = false;
  popup: any = {
    show: false,
    icon: 'success',
    title: '',
    html: '',
    timer: undefined
  }
  subs = new Subscription();
  constructor(
    private authService: AuthService,
    private popupService: PopupMessageService,
    private fb: FormBuilder,
    private router: Router,
    private seo: SeoService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.setSEO();
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  setSEO() {
    this.seo.setTitle('Login');
  }

  get ctr() {
    return this.loginForm.controls;
  }

  submitLogin() {
    this.formSubmitted = true;
    if (this.loginForm.invalid) {

      this.popupService.error({
        title: "Can't login",
        html: 'Please check all information and try again.',
      });
    } else {
      let input = this.loginForm.value;
      this.subs.add(
        this.authService.login(input).subscribe({
          next: (res: any) => {
            this.popup = {
              show: true,
              icon: 'success',
              title: 'Logged in successfully',
              timer: 1200
            };
            this.subs.add(this.translate.get('popups.titles.success-login').subscribe({
              next: (res: any) => {
                this.popup.title = res
              },
            }))
            this.authService.setUserToken(res.data.login);
            setTimeout(() => {
              this.router.navigate(['/member']);
            }, 1200);
          },
          error: (err) => {
            console.error('Error when login: ', err);
            this.popup = {
              show: true,
              icon: 'error',
              title: 'Login failed',
              html: '',
              timer: 1200
            };
            this.subs.add(this.translate.get('popups.titles.fail-login').subscribe({
              next: (res: any) => {
                this.popup.title = res
              },
            }))
            this.subs.add(this.translate.get('popups.htmls.error').subscribe({
              next: (res: any) => {
                this.popup.html = res + ": " + err
              },
            }))
            this.closePopup()
          },
        })
      );
    }
  }
  closePopup() {
    setTimeout(
      () => {
        this.popup.show = false
      }, 1200
    )

  }
}
