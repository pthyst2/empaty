import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModalBaseComponent } from '../modal-base/modal-base.component';
import { mockUser } from 'src/app/data/mocks/mockUser';
import { mockSpaceSizes } from 'src/app/data/mocks/mockSpaceSizes';
import { mockServiceTypes } from 'src/app/data/mocks/mockServiceTypes';
import { FormBuilder, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
import { ArrayService } from 'src/app/services/utilities/array.service';
import { SpaceService } from 'src/app/services/data/space.service';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'modal-create-space',
  templateUrl: './modal-create-space.component.html',
  styleUrls: ['./modal-create-space.component.sass'],
})
export class ModalCreateSpaceComponent extends ModalBaseComponent {
  faTimes = faTimes;

  @Input() user: any = mockUser
  @Input() override static = false;
  @Output() override closed = new EventEmitter<any>()

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
      widths: this.arrayService.fill(8, 50),
      lengths: this.arrayService.fill(8, 50)
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
  placeholders = {
    name: '',
    description: ''
  }
  subs = new Subscription();
  popup: any = {
    show: false,
    icon: '',
    title: '',
    html: '',
    timer: undefined
  }
  constructor(private translate: TranslateService, private fb: FormBuilder, private arrayService: ArrayService, private spaceService: SpaceService) {
    super();
  }
  override ngOnInit(): void {
    this.getPlaceholders()
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

  }

  submitForm1() {
    this.step1.submitted = true;
    if (this.form1.valid) {
      this.step1.active = false;
      this.step2.active = true;
    } else {
      this.popup = {
        show: true,
        icon: 'error',
        title: '',
        html: ''
      };
      this.subs.add(this.translate.get("popups.titles.invalid").subscribe((res: any) => { this.popup.title = res }));
      this.subs.add(this.translate.get("popups.htmls.check-and-try-again").subscribe((res: any) => { this.popup.html = res }));
    }
  }

  catchSliderValue(space: any) {
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
        data: ''
      };

      this.subs.add(this.spaceService.getSpaceEncodedData(data.width, data.length).subscribe({
        next: (res: any) => {
          data.data = res.data;
          this.createSpace(data);
        }, error: (err) => {
          console.error(err)
        }
      }))
    } else {
      this.popup = {
        show: true,
        icon: 'error',
        title: '',
        html: ''
      };
      this.subs.add(this.translate.get("popups.titles.invalid").subscribe((res: any) => { this.popup.title = res }));
      this.subs.add(this.translate.get("popups.htmls.check-and-try-again").subscribe((res: any) => { this.popup.html = res }));
    }
  }
  createSpace(data: any) {
    this.subs.add(
      this.spaceService.createSpace(data).subscribe({
        next: (res: any) => {
          this.popup = {
            show: true,
            icon: 'success',
            title: '',
            timer: 1500
          };
          this.subs.add(this.translate.get("popups.titles.success-create-space").subscribe((res: any) => { this.popup.title = res }));
          setTimeout(
            () => {
              window.location.reload();
            }, 1500
          )
        },
        error: (err) => {
          this.popup = {
            show: true,
            icon: 'error',
            title: '',
            html: ''
          };
          this.subs.add(this.translate.get("popups.titles.fail-create-space").subscribe((res: any) => { this.popup.title = res }));
          this.subs.add(this.translate.get("popups.htmls.error").subscribe((res: any) => { this.popup.html = res }));
          this.popup.html += err
        }
      })
    )
  }
  getPlaceholders() {
    this.subs.add(
      this.translate.get('modalCreateSpace.step1.placeholders.name').subscribe(
        (res: any) => { this.placeholders.name = res }
      )
    )
    this.subs.add(
      this.translate.get('modalCreateSpace.step1.placeholders.description').subscribe(
        (res: any) => { this.placeholders.description = res }
      )
    )
  }
}
