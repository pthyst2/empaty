import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
//#region Services
import { FormService } from 'src/app/services/utilities/form.service';
import { AuthService } from 'src/app/services/data/auth.service';
import { UserPlanService } from 'src/app/services/data/user-plan.service';
import { UserCardService } from 'src/app/services/data/user-card.service';
import { CreditCardService } from 'src/app/services/utilities/credit-card.service';
import { AddressService } from 'src/app/services/data/address.service';
import { InvoiceService } from 'src/app/services/data/invoice.service';
import { CountryService } from 'src/app/services/data/country.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
//#endregion
@Component({
  selector: 'page-member-billing',
  templateUrl: './page-member-billing.component.html',
  styleUrls: ['./page-member-billing.component.sass'],
})
export class PageMemberBillingComponent implements OnInit, OnDestroy {
  //#region Variables
  faEye = faEye;
  faEyeSlash = faEyeSlash;
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
        user: ['', [Validators.required]],
        country: ['', [Validators.required]],
        state: [''],
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        unit: [''],
        postalCode: ['', [Validators.required]],
      }),
      service: this.fb.group({
        user: ['', [Validators.required]],
        country: ['', [Validators.required]],
        state: [''],
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        unit: [''],
        postalCode: ['', [Validators.required]],
      }),
    },
    submits: {
      billing: false,
      service: false,
    },
    messages: {
      country: {
        required: 'Please select country.',
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
    selects: {
      years: [],
      types: [],
    },
    form: this.fb.group({
      user: ['', [Validators.required]],
      type: ['', [Validators.required]],
      holder: ['', [Validators.required]],
      number: ['', [Validators.required]],
      expMonth: ['', [Validators.required]],
      expYear: ['', Validators.required],
      cvv: ['', [Validators.required]],
    }),
    shows: {
      number: false,
      cvv: false,
    }
  };
  invoiceInfo: any = {
    loading: false,
    data: [],
  };
  popup: any = {};
  subs = new Subscription;
  placeholders = {
    city: 'City',
    state: 'State',
    unit: 'Unit',
    street: "Street",
    postalCode: 1000
  }
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
    private countryService: CountryService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.getPlaceHolders();
    this.getData('user');
    if (this.user) {
      this.getData('sub');
      this.getData('bill');
      this.getData('service');
      this.getData('payment');
      this.transferDataToForms();
    }
    this.getData('plans');
    this.getData('countries');
    this.getData('invoices');
    this.getData('card-types');
    this.getData('card-years');
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  getData(name: string) {
    switch (name) {
      case 'user': {
        this.user = this.authService.getUserDecoded();
        break;
      }
      case 'sub': {
        this.subscriptionInfo.loading = true;
        this.subscriptionInfo.data = this.planService.getSubscription(
          this.user._id
        )[0].items[0];
        setTimeout(() => {
          this.subscriptionInfo.loading = false;
        }, 1000);
        break;
      }
      case 'bill': {
        this.addressInfo.loading.billing = true;
        this.addressInfo.data.billing = this.addressService.getBillAddress(
          this.user._id
        )[0].items[0];
        setTimeout(() => {
          this.addressInfo.loading.billing = false;
        }, 1000);
        break;
      }
      case 'service': {
        this.addressInfo.loading.service = true;
        this.addressInfo.data.service = this.addressService.getServiceAddress(
          this.user._id
        )[0].items[0];
        setTimeout(() => {
          this.addressInfo.loading.service = false;
        }, 1000);
        break;
      }
      case 'payment': {
        this.paymentInfo.loading = true;
        this.paymentInfo.data = this.paymentService.getCard(this.user._id).data;
        setTimeout(() => {
          this.paymentInfo.loading = false;
        }, 1000);
        break;
      }
      case 'plans': {
        this.subscriptionInfo.selects.plans = this.planService.getPlans().data;
        break;
      }
      case 'invoices': {
        this.invoiceInfo.loading = true;
        this.invoiceInfo.data = this.invoicService.getAll(
          this.user._id
        )[0].items;
        setTimeout(() => {
          this.invoiceInfo.loading = false;
        }, 1000);
        break;
      }
      case 'countries': {
        this.countryService.getAllCountries().subscribe({
          next: (res) => {
            let data: any = res;
            this.addressInfo.selects.countries =
              this.countryService.sortAZ(data);
          },
          error: (err) => {
            console.error('Error when getting countries data: ', err);
          },
        });
        break;
      }
      case 'card-types': {
        this.paymentInfo.selects.types =
          this.paymentService.getTypes()[0].items;
        break;
      }
      case 'card-years': {
        this.paymentInfo.selects.years = this.ccService.getExpireYears();
        break;
      }
    }
  }
  dataToForm(formName: string, data: any) {
    let ctr: any = this.ctr(formName);
    switch (formName) {
      case 'sub': {
        ctr.user.setValue(data.user);
        ctr.plan.setValue(data.plan);
        break;
      }
      case 'bill':
      case 'service': {
        ctr.user.setValue(data.user);
        ctr.country.setValue(data.country);
        ctr.city.setValue(data.city);
        ctr.unit.setValue(data.unit ? data.unit : '');
        ctr.state.setValue(data.state ? data.state : '');
        ctr.street.setValue(data.street ? data.street : '');
        ctr.postalCode.setValue(data.postalCode);
        break;
      }
      case 'payment': {
        ctr.user.setValue(data.user);
        ctr.type.setValue(data.type);
        ctr.holder.setValue(data.holder);
        ctr.number.setValue(data.cardNumber);
        ctr.expMonth.setValue(data.expire.month);
        ctr.expYear.setValue(data.expire.year);
        ctr.cvv.setValue(data.cvv);
        break;
      }
    }
  }
  transferDataToForms() {
    if (this.subscriptionInfo.data) {
      this.dataToForm('sub', this.subscriptionInfo.data);
    }
    if (this.addressInfo.data.billing) {
      this.dataToForm('bill', this.addressInfo.data.billing);
    }
    if (this.addressInfo.data.service) {
      this.dataToForm('service', this.addressInfo.data.service);
    }
    if (this.paymentInfo.data) {
      this.dataToForm('payment', this.paymentInfo.data);
    }
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
        this.subscriptionInfo.edit = !this.subscriptionInfo.edit;
        break;
      }
      case 'address': {
        this.addressInfo.edit = !this.addressInfo.edit;
        this.getData('bill');
        this.getData('service');
        this.dataToForm('bill', this.addressInfo.data.billing);
        this.dataToForm('service', this.addressInfo.data.service);
        break;
      }
      case 'payment': {
        this.paymentInfo.edit = !this.paymentInfo.edit;
        this.getData('payment');
        this.dataToForm('payment', this.paymentInfo.data)
        break;
      }
    }
  }
  popupInvalid() {
    this.popup = {
      show: true,
      icon: 'error',
      title: '',
      html: '',
    };
    this.subs.add(this.translate.get('popups.titles.invalid').subscribe(
      (res: any) => {
        this.popup.title = res
      }
    ));
    this.subs.add(this.translate.get('popups.htmls.error').subscribe(
      (res: any) => {
        this.popup.html = res
      }
    ));
  }
  submitForm(name: string, content?: any) {
    switch (name) {
      case 'sub': {
        this.ctr('sub').plan.setValue(content._id);
        this.ctr('sub').user.setValue(this.user._id);
        this.subscriptionInfo.submitted = true;
        if (this.form('sub').valid) {
          this.subscriptionInfo.edit = false;
          this.editMode = false;
          try {
            this.popup = {
              show: true,
              icon: 'success',
              title: 'Subsciption updated!',
              timer: 1500,
            };
            this.subs.add(this.translate.get('popups.titles.success-subscription-update').subscribe(
              (res: any) => {
                this.popup.title = res
              }
            ))
            this.getData('sub');
          }
          catch (err) {
            this.popup = {
              show: true,
              icon: 'error',
              title: 'Update subscription failed',
              html: 'Error: ' + err
            };
            this.subs.add(this.translate.get('popups.titles.fail-subscription-update').subscribe(
              (res: any) => {
                this.popup.title = res
              }
            ));
            this.subs.add(this.translate.get('popups.htmls.error').subscribe(
              (res: any) => {
                this.popup.html = res
              }
            ))
          }
        } else {
          this.popupInvalid();
        }
        break;
      }
      case 'bill': {
        this.addressInfo.submits.billing = true;
        this.ctr('bill').user.setValue(this.user._id);
        if (this.form('bill').valid) {
          try {
            this.popup = {
              show: true,
              icon: 'success',
              title: 'Billing address updated!',
              timer: 1500,
            };
            this.subs.add(this.translate.get('popups.titles.success-billing-address-update').subscribe(
              (res: any) => {
                this.popup.title = res
              }
            ))
          }
          catch (err) {
            this.popup = {
              show: true,
              icon: 'error',
              title: 'Update billing address failed',
              html: 'Error: ' + err
            };
            this.subs.add(this.translate.get('popups.titles.fail-billing-address-update').subscribe(
              (res: any) => {
                this.popup.title = res
              }
            ));
            this.subs.add(this.translate.get('popups.htmls.error').subscribe(
              (res: any) => {
                this.popup.html = res + ": " + err
              }
            ))
          }
          this.getData('bill');
        } else {
          this.popupInvalid();
        }
        break;
      }
      case 'service': {
        this.addressInfo.submits.service = true;
        this.ctr('service').user.setValue(this.user._id);
        if (this.form('service').valid) {
          try {
            this.popup = {
              show: true,
              icon: 'success',
              title: 'Service address updated!',
              timer: 1500,
            };
            this.subs.add(this.translate.get('popups.titles.success-service-address-update').subscribe(
              (res: any) => {
                this.popup.title = res
              }
            ));
            this.getData('service');
          }
          catch (err) {
            this.popup = {
              show: true,
              icon: 'error',
              title: 'Update service address failed',
              html: 'Error: ' + err
            };
            this.subs.add(this.translate.get('popups.titles.fail-service-address-update').subscribe(
              (res: any) => {
                this.popup.title = res
              }
            ));
            this.subs.add(this.translate.get('popups.htmls.error').subscribe(
              (res: any) => {
                this.popup.html = res + ": " + err
              }
            ))
          }

        } else {
          this.popupInvalid();
        }
        break;
      }
      case 'payment': {
        this.paymentInfo.submitted = true;
        this.ctr('payment').user.setValue(this.user._id);
        if (this.form('payment').valid) {
          this.paymentInfo.edit = false;
          this.editMode = false;
          try {
            this.popup = {
              show: true,
              icon: 'success',
              title: 'Payment updated!',
              timer: 1500,
            };
            this.subs.add(this.translate.get('popups.titles.success-payment-update').subscribe(
              (res: any) => {
                this.popup.title = res
              }
            ))
            this.getData('payment');
          }
          catch (err) {
            this.popup = {
              show: true,
              icon: 'error',
              title: 'Update payment failed'
            };
            this.subs.add(this.translate.get('popups.titles.fail-payment-update').subscribe(
              (res: any) => {
                this.popup.title = res
              }
            ))
            this.subs.add(this.translate.get('popups.htmls.error').subscribe(
              (res: any) => {
                this.popup.html = res + ": " + err
              }
            ))
          }
        } else {
          this.popupInvalid();
        }
        break;
      }
    }
  }
  getPlaceHolders() {
    // City
    this.subs.add(this.translate.get('pageMemberSettingBilling.labels.city').subscribe(
      (res: any) => {
        this.placeholders.city = res
      }
    ))
    // State
    this.subs.add(this.translate.get('pageMemberSettingBilling.labels.state').subscribe(
      (res: any) => {
        this.placeholders.state = res
      }
    ))
    // Unit
    this.subs.add(this.translate.get('pageMemberSettingBilling.labels.unit').subscribe(
      (res: any) => {
        this.placeholders.unit = res
      }
    ))
    // Street
    this.subs.add(this.translate.get('pageMemberSettingBilling.labels.street').subscribe(
      (res: any) => {
        this.placeholders.street = res
      }
    ))
  }
}
