import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
//#region Services
import { FormService } from 'src/app/services/utilities/form.service';
import { AuthService } from 'src/app/services/data/auth.service';
import { UserPlanService } from 'src/app/services/data/user-plan.service';
import { UserCardService } from 'src/app/services/data/user-card.service';
import { CreditCardService } from 'src/app/services/utilities/credit-card.service';
import { AddressService } from 'src/app/services/data/address.service';
import { InvoiceService } from 'src/app/services/data/invoice.service';
import { CountryService } from 'src/app/services/data/country.service';
//#endregion
@Component({
  selector: 'page-member-billing',
  templateUrl: './page-member-billing.component.html',
  styleUrls: ['./page-member-billing.component.sass'],
})
export class PageMemberBillingComponent implements OnInit {
  //#region Variables
  user: any;
  editMode = false;
  editTitle = 'Edit Mode';
  subscriptionInfo: any = {
    data: undefined,
    selects: {
      plans: [],
    },
    loading: false,
    edit: false,
    form: this.fb.group({
      user: ['', [Validators.required]],
      plan: ['', [Validators.required]],
    }),
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
  invoiceInfo: any = {
    loading: false,
    data: [],
  };
  popup: any = {};

  //#endregion

  constructor(
    private fb: FormBuilder,
    public fs: FormService,
    private authService: AuthService,
    private addressService: AddressService,
    private planService: UserPlanService,
    private ccService: CreditCardService,
    private paymentService: UserCardService,
    private invoicService: InvoiceService,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.getUser();
    if (this.user) {
      this.getSubscription();
      this.getAddressBilling();
      this.getAddressService();
      this.getPayment();
      this.getInvoices();
    }
    this.getUserPlans();
    this.getCountries();
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
  }
  getAddressService() {
    this.addressInfo.loading.service = true;
    this.addressInfo.data.service = this.addressService.getServiceAddress(
      this.user._id
    )[0].items[0];
    setTimeout(() => {
      this.addressInfo.loading.service = false;
    }, 1000);
  }
  getSubscription() {
    this.subscriptionInfo.loading = true;
    this.subscriptionInfo.data = this.planService.getSubscription(
      this.user._id
    )[0].items[0];
    setTimeout(() => {
      this.subscriptionInfo.loading = false;
    }, 1000);
    let data = this.subscriptionInfo.data;

    this.ctr('sub').user.setValue(data.user);
    this.ctr('sub').plan.setValue(data.plan._id);
  }
  getPayment() {
    this.paymentInfo.loading = true;
    this.paymentInfo.data = this.paymentService.getCard(this.user._id).data;
    setTimeout(() => {
      this.paymentInfo.loading = false;
    }, 1000);
  }
  getInvoices() {
    this.invoiceInfo.loading = true;
    this.invoiceInfo.data = this.invoicService.getAll(this.user._id)[0].items;
    setTimeout(() => {
      this.invoiceInfo.loading = false;
    }, 1000);
  }

  getUserPlans() {
    this.subscriptionInfo.selects.plans = this.planService.getPlans().data;
    console.log('userPlans: ', this.subscriptionInfo.selects.plans);
  }
  getCountries() {
    this.countryService.getAllCountries().subscribe({
      next: (res) => {
        console.log('countries res: ', res);
        this.addressInfo.selects.countries = res;
      },
      error: (err) => {
        console.error('Error when getting countries list: ', err);
      },
    });
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
        console.log('Sub button clicked');
        this.editTitle = this.subscriptionInfo.data
          ? 'Change Plan'
          : 'Choose Plan';
        this.subscriptionInfo.edit = !this.subscriptionInfo.edit;
        console.log('this.subscriptionInfo.edit: ', this.subscriptionInfo.edit);
        break;
      }
      case 'address': {
        this.editTitle =
          !this.addressInfo.data.billing && !this.addressInfo.data.service
            ? 'Setup Addresses'
            : 'Edit Addresses';
        this.addressInfo.edit = !this.addressInfo.edit;
        break;
      }
      case 'payment': {
        this.editTitle = this.paymentInfo.data
          ? 'Edit Payment'
          : 'Setup Payment Method';
        this.paymentInfo.edit = !this.paymentInfo.edit;
        break;
      }
    }
  }
  submitForm(name: string, content?: any) {
    switch (name) {
      case 'sub': {
        this.ctr('sub').plan.setValue(content._id);
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
