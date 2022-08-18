import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormBuilder, Validators } from '@angular/forms';
import { SpaceService } from 'src/app/services/data/space.service';
import { FormService } from 'src/app/services/utilities/form.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'modal-edit-space',
  templateUrl: './modal-edit-space.component.html',
  styleUrls: ['./modal-edit-space.component.sass'],
})
export class ModalEditSpaceComponent implements OnInit {
  @Input() space: any;
  @Output() closed = new EventEmitter();

  editForm = this.fb.group({
    id: ['', [Validators.required]],
    name: ['', [Validators.required]],
    nameja: [''],
    description: [''],
    image: [''],
    service: ['', [Validators.required]],
  });
  serviceTypes: any = [];
  submitted = false;
  image: any;
  popup: any = {
    show: false,
    icon: 'success',
    title: '',
    html: '',
    timer: undefined,
  };
  sub = new Subscription();
  constructor(
    private fb: FormBuilder,
    public fs: FormService,
    private spaceSerivce: SpaceService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.loadServiceTypes();
    this.transferSpaceToForm();
  }
  close(data?: any) {
    this.closed.emit(data ? data : false);
  }

  loadServiceTypes() {
    this.serviceTypes = this.spaceSerivce.getServiceTypes();
  }

  transferSpaceToForm() {
    console.log('this.space: ', this.space);
    if (this.space) {
      this.ctr.id.setValue(this.space.id);
      this.ctr.name.setValue(this.space.name);
      this.ctr.nameja.setValue(this.space.name_ja);
      this.ctr.description.setValue(this.space.description);
      this.ctr.service.setValue(this.space.service);

      if (!this.space.image) {
        this.image = environment.imageUrls.none;
      } else {
        this.image = this.sanitizer.bypassSecurityTrustResourceUrl(
          'data:image/jpg;base64,' + this.space.image
        );
      }
    }
  }

  get ctr() {
    return this.editForm.controls;
  }

  submitForm() {
    this.submitted = true;
    if (this.editForm.valid) {
      let data = {
        id: this.ctr.id.value,
        name: this.ctr.name.value,
        nameja: this.ctr.nameja.value,
        description: this.ctr.description.value,
        service: this.ctr.service.value,
      };
      this.sub.add(
        this.spaceSerivce.updateSpace(data).subscribe({
          next: (res: any) => {
            this.popup = {
              show: true,
              icon: 'success',
              title: 'Space updated !',
              timer: 1000,
            };
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          },
          error: (err) => {
            this.popup = {
              show: true,
              icon: 'error',
              title: "Can't update space",
              html: 'Error when updating space: ' + err,
            };
          },
        })
      );
    } else {
      this.popup = {
        show: true,
        icon: 'error',
        title: "Can't update space",
        html: 'Some info is missing or invalid. Please check all information and try again.',
      };
    }
  }
}
