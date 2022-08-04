import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/utilities/form.service';
import { AuthService } from 'src/app/services/data/auth.service';
import { UserPlanService } from 'src/app/services/data/user-plan.service';
import { UserCardService } from 'src/app/services/data/user-card.service';
import { CreditCardService } from 'src/app/services/utilities/credit-card.service';
import { AddressService } from 'src/app/services/data/address.service';
@Component({
  selector: 'page-member-billing',
  templateUrl: './page-member-billing.component.html',
  styleUrls: ['./page-member-billing.component.sass'],
})
export class PageMemberBillingComponent implements OnInit {
  user: any;
  editMode = false;
  editTitle = 'Edit Mode';
  subscriptionInfo: any = {
    data: undefined,
    loading: false,
    edit: false,
    form: this.fb.group({}),
  };
  addressInfo: any = {
    data: {
      billing: undefined,
      service: undefined,
    },
    loading: {
      billing: false,
      service: false,
    },
    edit: false,
    selects: {
      countries: [],
    },
    forms: {
      billing: this.fb.group({
        _id: ['', [Validators.required]],
        country: ['', [Validators.required]],
        state: [''],
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        unit: [''],
        postalcode: ['', [Validators.required]],
      }),
      service: this.fb.group({
        _id: ['', [Validators.required]],
        country: ['', [Validators.required]],
        state: [''],
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        unit: [''],
        postalcode: ['', [Validators.required]],
      }),
    },
    submits: {
      billing: false,
      service: false,
    },
    messages: {
      country: {
        required: 'Please select country',
      },
      city: {
        required: 'City information cannot be empty.',
      },
      street: {
        required: 'Street information cannot be empty.',
      },
      postalCode: {
        required: 'Postal code information cannot be empty.',
      },
    },
  };
  paymentInfo: any = {
    data: undefined,
    loading: false,
    edit: false,
    selects: [],
    form: this.fb.group({
      type: ['', [Validators.required]],
      holder: ['', [Validators.required]],
      number: ['', [Validators.required]],
      expMonth: ['', [Validators.required]],
      expYear: ['', Validators.required],
      cvc: ['', [Validators.required]],
    }),
  };
  popup: any;
  constructor(
    private fb: FormBuilder,
    public fs: FormService,
    private authService: AuthService,
    private addressService: AddressService,
    private planService: UserPlanService,
    private ccService: CreditCardService,
    private paymentService: UserCardService
  ) {}

  ngOnInit(): void {
    this.getUser();
    if (this.user) {
      this.getSubscription();
      this.getAddressBilling();
      this.getAddressService();
      this.getPayment();
    }
  }

  getUser() {
    this.user = this.authService.getUserDecoded();
  }

  getAddressBilling() {
    this.addressInfo.loading.billing = true;
    this.addressInfo.data.billing = this.addressService.getBillAddress(
      this.user._id
    )[0].items[0];
    setTimeout(() => {
      this.addressInfo.loading.billing = false;
    }, 1000);
    console.log('billing: ', this.addressInfo.data.billing);
  }
  getAddressService() {
    this.addressInfo.loading.service = true;
    this.addressInfo.data.service = this.addressService.getServiceAddress(
      this.user._id
    )[0].items[0];
    setTimeout(() => {
      this.addressInfo.loading.service = false;
    }, 1000);
    console.log('service: ', this.addressInfo.data.service);
  }
  getSubscription() {
    this.subscriptionInfo.loading = true;
    this.subscriptionInfo.data = this.planService.getSubscription(
      this.user._id
    )[0].items[0];
    setTimeout(() => {
      this.subscriptionInfo.loading = false;
    }, 1000);
    console.log('subscription: ', this.subscriptionInfo.data);
  }
  getPayment() {
    this.paymentInfo.loading = true;
    this.paymentInfo.data = this.paymentService.getCard(this.user._id).data;
    setTimeout(() => {
      this.paymentInfo.loading = false;
    }, 1000);
  }

  form(name: string) {
    let result: any;
    switch (name) {
      case 'sub': {
        result = this.subscriptionInfo.form;
        break;
      }
      case 'bill': {
        result = this.addressInfo.forms.billing;
        break;
      }
      case 'service': {
        result = this.addressInfo.forms.service;
        break;
      }
      case 'payment': {
        result = this.paymentInfo.form;
        break;
      }
    }
    return result;
  }
  ctr(name: string) {
    return this.form(name).controls;
  }
  toggleEdit(name: string) {
    this.editMode = !this.editMode;
    switch (name) {
      case 'sub': {
        this.editTitle = 'Edit Subscription';
        this.subscriptionInfo.edit = !this.subscriptionInfo.edit;
        break;
      }
      case 'address': {
        this.editTitle = 'Edit Addresses';
        this.addressInfo.edit = !this.addressInfo.edit;
        break;
      }
      case 'payment': {
        this.editTitle = 'Edit Payment';
        this.paymentInfo.edit = !this.paymentInfo.edit;
        break;
      }
    }
  }
  submitForm(name: string) {
    switch (name) {
      case 'sub': {
        this.subscriptionInfo.submitted = true;
        if (this.form('sub').valid) {
          this.subscriptionInfo.edit = false;
          this.editMode = false;
          this.popup = {
            show: true,
            icon: 'success',
            title: 'Subsciption updated!',
            timer: 1500,
          };
          this.planService.getSubscription(this.user._id);
        } else {
          this.popup = {
            show: true,
            icon: 'error',
            title: 'Invalid or missing info',
            html: 'Please checkk all information and try again.',
          };
        }
        break;
      }
      case 'bill': {
        this.addressInfo.submits.billing = true;
        if (this.form('bill').valid) {
          this.popup = {
            show: true,
            icon: 'success',
            title: 'Billing address updated!',
            timer: 1500,
          };
          this.addressService.getBillAddress(this.user._id);
        } else {
          this.popup = {
            show: true,
            icon: 'error',
            title: 'Invalid or missing info',
            html: 'Please checkk all information and try again.',
          };
        }
        break;
      }
      case 'service': {
        this.addressInfo.submits.service = true;
        if (this.form('service').valid) {
          this.popup = {
            show: true,
            icon: 'success',
            title: 'Service address updated!',
            timer: 1500,
          };
          this.addressService.getServiceAddress(this.user._id);
        } else {
          this.popup = {
            show: true,
            icon: 'error',
            title: 'Invalid or missing info',
            html: 'Please checkk all information and try again.',
          };
        }
        break;
      }
      case 'payment': {
        this.paymentInfo.submitted = true;
        if (this.form('payment').valid) {
          this.paymentInfo.edit = false;
          this.editMode = false;
          this.popup = {
            show: true,
            icon: 'success',
            title: 'Payment updated!',
            timer: 1500,
          };
          this.paymentService.getCard(this.user._id);
        } else {
          this.popup = {
            show: true,
            icon: 'error',
            title: 'Invalid or missing info',
            html: 'Please checkk all information and try again.',
          };
        }
        break;
      }
    }
  }
}
