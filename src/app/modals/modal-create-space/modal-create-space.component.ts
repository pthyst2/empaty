import { Component,   Input, Output, EventEmitter } from '@angular/core';
import { ModalBaseComponent } from '../modal-base/modal-base.component';
import { mockUser } from 'src/app/data/mocks/mockUser';
import { mockSpaceSizes } from 'src/app/data/mocks/mockSpaceSizes';
import { mockServiceTypes } from 'src/app/data/mocks/mockServiceTypes';
import { FormBuilder, Validators } from '@angular/forms';
import { PopupMessageService } from 'src/app/services/utilities/popup-message.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
import { ArrayService } from 'src/app/services/utilities/array.service';
import { SpaceService } from 'src/app/services/data/space.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'modal-create-space',
  templateUrl: './modal-create-space.component.html',
  styleUrls: ['./modal-create-space.component.sass'],
})
export class ModalCreateSpaceComponent extends ModalBaseComponent {
  faTimes = faTimes;

  @Input() user: any = mockUser;
  @Input() override static: boolean = false;
  @Output() override closed = new EventEmitter<any>();

  step1: any = {
    active: true,
    title: 'Create Space',
    selects: {
      serviceTypes: mockServiceTypes,
    },
    form: this.fb.group({
      name: ['', [Validators.required]],
      service: ['', [Validators.required]],
      description: [''],
    }),
    submitted: false,
    defaultImage: environment.imageUrls.space + 'restaurant.png'
  };

  step2: any = {
    active: false,
    title: "Select Space's Size",
    selects: {
      createBy: ['template', 'self'],
      sizes: mockSpaceSizes,
      widths:  this.arrayService.fill(8,50),
      lengths: this.arrayService.fill(8,50)
    },
    form: this.fb.group({
      createBy: ['template'],
      width: [8, [Validators.required]],
      length: [10, [Validators.required]],
    }),
    msg: {
      width: {
        required: 'Please set space width.',
      },
      length: {
        required: 'Please set space length.',
      },
    },
    submitted: false,
    swiperConfig: {
      slidesPerView: 3,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 0
    },
    cubeViewImage: environment.imageUrls.svg + 'cube-view.svg'
  };

  modalTitle: any = this.step1.title;
  subs = new Subscription();
  constructor(private fb: FormBuilder, private popup: PopupMessageService, private arrayService: ArrayService, private spaceService: SpaceService) {
    super();
  }
  override ngOnDestroy(): void {
    this.subs.unsubscribe()
  }
  override close(data?: any) {
    this.closed.emit(data); 
  }

  get form1() {
    return this.step1.form;
  }
  get form2() {
    return this.step2.form;
  }
  get ctr1() {
    return this.form1.controls;
  }
  isCtr1Invalid(control: any) {
    return (control.dirty || this.step1.submitted) && control.invalid;
  }
  get ctr2() {
    return this.form2.controls;
  }
  isCtr2Invalid(control: any) {
    return control.dirty || (this.step2.submitted && control.invalid);
  }
  backStep1() {
    this.step2.active = false;
    this.step1.active = true;
    this.modalTitle = this.step1.title;
  }

  submitForm1() {
    this.step1.submitted = true;
    if (this.form1.valid) {
      this.step1.active = false;
      this.step2.active = true;
      this.modalTitle = this.step2.title;
    } else {
      this.popup.error({
        title: 'Invalid or missing info',
        html: 'Please check all information and try again.',
      });
    }
  }

  catchSliderValue(space: any){
    this.ctr2.width.setValue(space.width);
    this.ctr2.length.setValue(space.length);
  }

  submitForm2() {
    this.step2.submitted = true;
    if (this.form2.valid) {
      let data = {
        name: this.ctr1.name.value,
        service: this.ctr1.service.value, 
        description: this.ctr1.description.value ? this.ctr1.description.value : '',
        width: this.ctr2.width.value,
        length: this.ctr2.length.value,
      };
       
      this.subs.add(
        this.spaceService.createSpace(data).subscribe({
          next: (res: any) => {
            console.log("res create space: ", res);
            this.popup.success({ title: 'New Space Created' });
            this.close(true);
          },
          error: (err) => {
            this.popup.error({
              title: 'Create space failed',
              html: 'Error when creating space: ' + err });
          }
        })
      ) 

    } else {
      this.popup.error({
        title: 'Invalid or missing info',
        html: 'Please check all information and try again.',
      });
    }
  }
}
