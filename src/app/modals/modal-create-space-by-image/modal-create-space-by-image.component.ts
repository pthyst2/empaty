import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
import { SpaceService } from 'src/app/services/data/space.service';
@Component({
  selector: 'modal-create-space-by-image',
  templateUrl: './modal-create-space-by-image.component.html',
  styleUrls: ['./modal-create-space-by-image.component.sass'],
})
export class ModalCreateSpaceByImageComponent implements OnInit {
  faTimes = faTimes;
  stapleSvg = environment.imageUrls.svg + 'staple.svg';
  @Input() user: any;
  @Output() closed = new EventEmitter();
  step1: any = {
    active: true,
    title: 'Create Space',
    selects: {
      categories: [],
    },
    form: this.fb.group({
      title: ['', [Validators.required]],
      type: ['2d'],
      image: [''],
      audio: [''],
      present: [''],
      author: [''],
      contactName: [''],
      contactEmail: [''],
      contactCountryCode: [''],
      contactPhoneNumber: [''],
      address: [''],
      url: [''],
      published: [''],
      summary: [''],
      category: ['', [Validators.required]],
    }),
    messages: {
      title: {
        required: "Space's title cannot be empty.",
      },
      category: {
        required: 'Please select category.',
      },
    },
    shows: {
      contactName: true,
      contactEmail: true,
      contactPhome: true,
      address: true,
      url: true,
      published: true,
    },
    submitted: false,
  };
  step2: any = {
    active: false,
    title: 'Select Payment',
    form: this.fb.group({
      type: ['', [Validators.required]],
      holder: ['', [Validators.required]],
      number: ['', [Validators.required]],
      last4: [''],
      cvc: ['', [Validators.required]],
      expMonth: ['', [Validators.required]],
      expYear: ['', [Validators.required]],
    }),
    messages: {
      type: {
        required: 'Type of card cannot be empty.',
      },
      holder: {
        required: "Card's holder cannot be empty.",
      },
      number: {
        required: "Card's number cannot be empty.",
      },
      cvc: {
        required: "Card's security number is missing.",
      },
      expMonth: {
        required: 'Expire month is missing.',
      },
      expYear: {
        required: 'Expire year is missing.',
      },
    },
    submitted: false,
  };
  step3: any = {
    active: false,
    title: 'Purchase Space',
    form: this.fb.group({
      subTotal: [1100],
      tax: [88],
      total: [1188],
    }),
  };
  title = this.step1.title;
  popup = false;
  popupContent: any = {
    icon: '',
    title: '',
    html: '',
    timer: undefined,
  };
  constructor(private fb: FormBuilder, private spaceService: SpaceService) {}

  ngOnInit(): void {
    this.getCategories();
  }
  close(data?: any) {
    this.closed.emit(data ? data : false);
  }

  getCategories() {
    let res = this.spaceService.getCategories();
    this.step1.selects.categories = res.data;
  }

  get form1() {
    return this.step1.form;
  }
  get ctr1() {
    return this.form1.controls;
  }
  isInvalid1(control: FormControl) {
    return (control.dirty || this.step1.submitted) && control.invalid;
  }
  get form2() {
    return this.step2.form;
  }
  get ctr2() {
    return this.form2.controls;
  }
  isInvalid2(control: FormControl) {
    return (control.dirty || this.step2.submitted) && control.invalid;
  }
  get form3() {
    return this.step3.form;
  }
  get ctr3() {
    return this.form3.controls;
  }
  goStep(step: number) {
    switch (step) {
      case 1: {
        this.step1.active = true;
        this.title = this.step1.title;
        this.step2.active = false;
        this.step3.active = false;
        break;
      }
      case 2: {
        this.step1.active = false;
        this.step2.active = true;
        this.title = this.step2.title;
        this.step3.active = false;
        break;
      }
      case 3: {
        this.step1.active = false;
        this.step2.active = false;
        this.step3.active = true;
        this.title = this.step3.title;
        break;
      }
    }
  }
  submitForm1() {
    this.step1.submitted = true;
    if (this.form1.valid) {
      this.goStep(2);
    } else {
      this.popup = true;
      this.popupContent = {
        icon: 'error',
        title: 'Invalid or missing information',
        html: 'Please check all information and try again.',
      };
    }
  }

  submitForm2() {
    this.step2.submitted = true;
    if (this.form2.valid) {
      this.goStep(3);
    } else {
      this.popup = true;
      this.popupContent = {
        icon: 'error',
        title: 'Invalid or missing information',
        html: 'Please check all information and try again.',
      };
    }
  }

  submitForm3() {
    this.close(true);
  }
}
