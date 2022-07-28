import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

//#region Services
import { AuthService } from 'src/app/services/data/auth.service';
import { PopupMessageService } from 'src/app/services/utilities/popup-message.service';
import { SeoService } from 'src/app/services/utilities/seo.service';
//#endregion
@Component({
  selector: 'page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.sass'],
})
export class PageLoginComponent implements OnInit {
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  showPassword: boolean = false;
  validatorMessages = {
    email: {
      required: 'Email cannot be empty.',
      email: 'Email invalid.',
    },
    password: {
      required: 'Password cannot be empty.',
    },
  };
  formSubmitted: boolean = false;

  constructor(
    private authService: AuthService,
    private popupService: PopupMessageService,
    private fb: FormBuilder,
    private router: Router,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.setSEO();
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
      try {
        let data = this.loginForm.value;
        let res = this.authService.login(data);
        if (res.data) {
          this.popupService.success({
            title: 'Logged in successfully',
            html: 'Redirecting to member home page...',
          });
          localStorage.setItem('token', JSON.stringify(res.data));
          let user = this.authService.getUserDecoded();
          localStorage.setItem('user', JSON.stringify(user));
          setTimeout(() => {
            this.router.navigate(['member']);
          }, 1500);
        }
      } catch (err) {
        this.popupService.error({
          title: 'Login failed',
          html: err,
        });
      }
    }
  }
}
