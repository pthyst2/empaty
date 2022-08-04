import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/utilities/form.service';
import { AuthService } from 'src/app/services/data/auth.service';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'page-member-profile',
  templateUrl: './page-member-profile.component.html',
  styleUrls: ['./page-member-profile.component.sass'],
})
export class PageMemberProfileComponent implements OnInit {
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  user: any;
  basicInfo: any = {
    loading: false,
    edit: false,
    form: this.fb.group({
      _id: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      company: ['', [Validators.required]],
    }),
    submitted: false,
    messages: {
      firstname: {
        required: 'First name cannot be empty.',
      },
      lastname: {
        required: 'Last name cannot be empty.',
      },
      phone: {
        required: 'Phone number cannot be empty.',
      },
      company: {
        required: "Company's name cannot be empty.",
      },
    },
  };

  loginInfo: any = {
    loading: false,
    edit: false,
    form: this.fb.group({
      _id: ['', [Validators.required]],
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
    messages: {
      email: {
        required: 'Email cannot be empty.',
        email: 'Email is invalid.',
      },
      currentPassword: {
        required: 'Please enter the current password.',
      },
      newPassword: {
        required: 'Please enter the new password.',
      },
      confirmPassword: {
        required: 'Please re-enter the new password.',
        matched: "Confirm password don't match with the new password.",
      },
    },
  };
  popup = false;
  popupContent: any = {
    title: '',
    html: '',
    icon: '',
    timer: undefined,
  };
  constructor(
    private fb: FormBuilder,
    public fs: FormService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.basicInfo.loading = true;
    this.loginInfo.loading = true;
    setTimeout(() => {
      this.user = this.authService.getUserDecoded();
      this.setFormsValue();
      this.basicInfo.loading = false;
      this.loginInfo.loading = false;
    }, 1000);
  }
  setFormsValue() {
    if (this.user) {
      let u = this.user;
      this.ctr1._id.setValue(u._id);
      this.ctr1.firstname.setValue(u.firstname);
      this.ctr1.lastname.setValue(u.lastname);
      this.ctr1.phone.setValue(u.phoneNumber);
      this.ctr1.company.setValue(u.company);
      this.ctr2._id.setValue(u._id);
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
      this.togglePopup({
        icon: 'success',
        title: 'Basic infomation updated',
        timer: 1500,
      });
      this.basicInfo.edit = false;
      this.getUser();
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
      this.togglePopup({
        icon: 'success',
        title: 'Login infomation updated',
        timer: 1500,
      });
      this.loginInfo.edit = false;
      this.getUser();
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
