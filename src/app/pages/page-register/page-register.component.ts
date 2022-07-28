import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { solidCountries } from 'src/app/data/solids/solidCountries';
//#region Services
import { AuthService } from 'src/app/services/data/auth.service';
import { PopupMessageService } from 'src/app/services/utilities/popup-message.service';
import { UserPlanService } from 'src/app/services/data/user-plan.service';
import { UserCardService } from 'src/app/services/data/user-card.service';
import { CreditCardService } from 'src/app/services/utilities/credit-card.service';
import { SeoService } from 'src/app/services/utilities/seo.service';
//#endregion
@Component({
  selector: 'page-register',
  templateUrl: './page-register.component.html',
  styleUrls: ['./page-register.component.sass'],
})
export class PageRegisterComponent implements OnInit {
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  user: any;

  stepRegister = {
    active: true,
    form: this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(24),
        ],
      ],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(20),
        ],
      ],
      countryCode: [solidCountries[0].value, [Validators.required]],
      companyName: ['', [Validators.required]],
    }),
    shows: {
      password: false,
    },
    selects: {
      countryCodes: solidCountries,
    },
    submitted: false,
    messages: {
      firstName: {
        required: 'First name cannot be empty.',
        maxLength: 'First name invalid.',
      },
      lastName: {
        required: 'Last name cannot be empty.',
        maxLength: 'Last name invalid.',
      },
      email: {
        required: 'Email cannot be empty.',
        email: 'Email invalid.',
      },
      password: {
        required: 'Password cannot be empty.',
        minLength:
          'To secure your account, please choose password at least with 6 characters.',
        maxLength: 'Password too long.',
      },
      phoneNumber: {
        required: 'Phone number cannot be empty.',
        minLength: 'Invalid phone number.',
        maxLength: 'Invalid phone number.',
      },
      countryCode: {
        required: 'Please choose country code.',
      },
      companyName: {
        required: 'Company name cannot be empty.',
      },
    },
  };

  stepPlan: any = {
    active: false,
    plan: undefined,
  };

  stepCreditCard: any = {
    active: false,
    expYears: [],
    card: this.fb.group({
      type: ['visa', [Validators.required]],
      holder: ['', [Validators.required]],
      number: ['', [Validators.required, Validators.pattern('^[0-9]{10,20}$')]],
      expMonth: ['', [Validators.required]],
      expYear: ['', [Validators.required]],
      cvc: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]],
    }),
    shows: {
      number: false,
      cvc: false,
    },
    submitted: false,
    messages: {
      type: {
        required: 'Please select type of credit card.',
      },
      holder: {
        required: 'Card holder cannot be empty.',
      },
      number: {
        required: 'Card number cannot be empty',
        pattern: 'Card number invalid.',
      },
      expMonth: {
        required: 'Please select expire month of card.',
      },
      expYear: {
        required: 'Please select expire year of card.',
      },
      cvc: {
        required: 'Security number of card cannot be empty.',
        pattern: 'Invalid security number.',
      },
    },
  };

  stepPaymentMethod = {
    active: false,
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private popupService: PopupMessageService,
    private userPlanService: UserPlanService,
    private userCardService: UserCardService,
    private creditCardService: CreditCardService,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.setSEO();
    this.loadPlans();
    this.loadExpYears();
  }

  setSEO() {
    this.seo.setTitle('Register New Account');
  }

  //#region Register
  get ctrRegister() {
    return this.stepRegister.form.controls;
  }
  submitStepRegister() {
    this.stepRegister.submitted = true;
    if (this.stepRegister.form.valid) {
      try {
        let data = this.stepRegister.form.value;
        let res = this.authService.register(data);
        if (res.data) {
          this.user = res.data;
          localStorage.setItem('user', JSON.stringify(this.user));
          this.popupService.success({
            title: 'New account created',
          });
          setTimeout(() => {
            this.stepRegister.active = false;
            this.stepPlan.active = true;
          }, 1300);
        }
      } catch (err) {
        this.popupService.error({
          title: "Can't create account",
          html: err,
        });
      }
    } else {
      this.popupService.error({
        title: "Can't create account",
        html: 'Please check all information and try again.',
      });
    }
  }
  //#endregion
  //#region Plan
  loadPlans() {
    let res = this.userPlanService.getPlans();
    this.stepPlan.plans = res.data;
  }
  selectPlan(plan: any) {
    this.stepPlan.plan =
      this.stepPlan.plan && this.stepPlan.plan._id == plan._id
        ? undefined
        : plan;
  }
  submitStepPlan() {
    if (this.stepPlan.plan) {
      let data = {
        user: this.user._id,
        plan: this.stepPlan.plan._id,
      };
      let res = this.userPlanService.purchasePlan(data);
      if (res.status == 201) {
        this.popupService.success({
          title: 'Plan purchased',
        });
        setTimeout(() => {
          this.stepPlan.active = false;
          this.stepCreditCard.active = true;
        }, 1000);
      }
    } else {
      this.popupService.error({
        html: 'Please choose a plan to purchase.',
      });
    }
  }
  skipPlan() {
    this.stepPlan.active = false;
    this.stepCreditCard.active = true;
  }
  //#endregion
  //#region Credit card
  get ctrCard() {
    return this.stepCreditCard.card.controls;
  }
  loadExpYears() {
    this.stepCreditCard.expYears = this.creditCardService.getExpireYears();
  }
  submitStepCreditCard() {
    this.stepCreditCard.submitted = true;
    if (this.stepCreditCard.card.valid) {
      try {
        let data = {
          user: this.user._id,
          card: this.stepCreditCard.card.value,
        };
        let res = this.userCardService.updateCard(data);
        if (res.status == 200) {
          this.popupService.success({
            title: 'Credit card added',
            html: 'Redirecting to home page...',
          });
          setTimeout(() => {
            this.router.navigate(['home']);
          }, 1300);
        }
      } catch (err) {
        this.popupService.error({
          title: "Can't add credit card",
          html: err,
        });
      }
    } else {
      this.popupService.error({
        title: 'Invalid or missing info',
        html: 'Please check all information and try again.',
      });
    }
  }
  skipCreditCard() {
    this.router.navigate(['home']);
  }
  //#endregion

  comingsoon() {
    this.popupService.underConstruct();
  }
}
