import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
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
export class PageLoginComponent implements OnInit, OnDestroy {
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
  subs = new Subscription();
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
          next: (res) => {
            this.popupService.success({
              title: 'Logged in successfully',
              html: 'Redirecting to member home page...',
            });
            this.authService.setUserToken(res.data.login);
            setTimeout(() => {
              this.router.navigate(['/member']);
            }, 1500);
          },
          error: (err) => {
            console.error(err);
            this.popupService.error({
              title: "Can't login",
              html: err,
            });
          },
        })
      );
    }
  }
}
