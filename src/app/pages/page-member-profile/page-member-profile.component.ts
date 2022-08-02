import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/utilities/form.service';
import { AuthService } from 'src/app/services/data/auth.service';
@Component({
  selector: 'page-member-profile',
  templateUrl: './page-member-profile.component.html',
  styleUrls: ['./page-member-profile.component.sass'],
})
export class PageMemberProfileComponent implements OnInit {
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
    }, 2000);
  }
  setFormsValue() {
    if (this.user) {
      let u = this.user;
      this.ctr1.firstname.setValue(u.firstname);
      this.ctr1.firstname.setValue(u.lastname);
      this.ctr1.phone.setValue(u.phoneNumber);
      this.ctr1.company.setValue(u.company);
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
  submitForm1() {}
  get form2() {
    return this.loginInfo.form;
  }
  get ctr2() {
    return this.form2.controls;
  }
}
