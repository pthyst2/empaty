import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/utilities/form.service';
import { AuthService } from 'src/app/services/data/auth.service';
import { UserService } from 'src/app/services/data/user.service';
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
  popup = false;
  popupContent: any = {
    title: '',
    html: '',
    icon: '',
    timer: undefined,
  };
  subs = new Subscription();
  constructor(
    private fb: FormBuilder,
    public fs: FormService,
    private authService: AuthService,
    private userService: UserService
  ) {}

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
          console.log('user: ', this.user);
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
      let u = this.user;
      this.ctr1.id.setValue(u.id);
      this.ctr1.fullname.setValue(u.fullname);
      this.ctr1.phone.setValue(u.phone);
      this.ctr1.address.setValue(u.address ? u.address : 'No Data');
      this.ctr2.id.setValue(u.id);
      this.ctr2.email.setValue(u.email);
    }
  }
  toggleForm(section: any) {
    section.edit = !section.edit;
  }
  get form1() {
    return this.basicInfo.form;
  }
  get ctr1() {
    return this.form1.controls;
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
            this.togglePopup({
              icon: 'success',
              title: 'Basic infomation updated',
              html: 'Reloading data...',
              timer: 1500,
            });
            this.basicInfo.edit = false;
            setTimeout(() => window.location.reload(), 1500);
          },
          error: (err) => {
            console.error(err);
          },
        })
      );
    } else {
      this.togglePopup({
        icon: 'error',
        title: 'Invalid or missing info',
        html: 'Please check all information and try again.',
      });
    }
  }
  get form2() {
    return this.loginInfo.form;
  }
  get ctr2() {
    return this.form2.controls;
  }
  submitForm2() {
    this.loginInfo.submitted = true;

    if (this.ctr2.confirmPassword.value != this.ctr2.newPassword.value) {
      this.ctr2.confirmPassword.setErrors({ matched: true });
    } else {
      this.ctr2.confirmPassword.setErrors(null);
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
            this.togglePopup({
              icon: 'success',
              title: 'Login infomation updated',
              html: 'Reloading data...',
              timer: 1500,
            });
            this.loginInfo.edit = false;
            setTimeout(() => window.location.reload(), 1500);
          },
          error: (err) => {
            console.error(err);
          },
        })
      );
    } else {
      this.togglePopup({
        icon: 'error',
        title: 'Invalid or missing info',
        html: 'Please check all information and try again.',
      });
    }
  }
  togglePopup(content?: any) {
    this.popup = content ? true : false;
    this.popupContent = {
      title: content && content.title ? content.title : '',
      html: content && content.html ? content.html : '',
      icon: content && content.icon ? content.icon : '',
      timer: content && content.timer ? content.timer : undefined,
    };
  }
}
