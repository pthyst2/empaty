import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormBuilder, Validators } from '@angular/forms';
import { SpaceService } from 'src/app/services/data/space.service';
import { FormService } from 'src/app/services/utilities/form.service';
@Component({
  selector: 'modal-edit-space',
  templateUrl: './modal-edit-space.component.html',
  styleUrls: ['./modal-edit-space.component.sass'],
})
export class ModalEditSpaceComponent implements OnInit {
  @Input() space: any;
  @Output() closed = new EventEmitter();

  editForm = this.fb.group({
    _id: ['', [Validators.required]],
    title: ['', [Validators.required]],
    url: [''],
    image: [''],
    summary: [''],
  });

  messages = {
    title: {
      required: "Space's title cannot be empty.",
    },
  };
  submitted = false;
  image: any;
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
    private spaceSerivce: SpaceService
  ) {}

  ngOnInit(): void {
    this.transferSpaceToForm();
  }
  close(data?: any) {
    this.closed.emit(data ? data : false);
  }
  setImage(url: any) {
    this.image = url;
  }
  transferSpaceToForm() {
    console.log('this.space: ', this.space);
    if (this.space) {
      this.ctr._id.setValue(this.space._id);
      this.ctr.title.setValue(this.space.title);
      this.ctr.url.setValue(this.space.url);
      this.ctr.image.setValue(this.space.thumbnail);
      this.ctr.summary.setValue(this.space.summary);
      this.image = this.space.thumbnail
        ? this.space.thumbnail
        : environment.imageUrls.none;
    }
  }
  get ctr() {
    return this.editForm.controls;
  }

  submitForm() {
    this.submitted = true;
    if (this.editForm.valid) {
      try {
        let data = this.editForm.value;
        let res = this.spaceSerivce.updateSpace(data);
        if (res.status == 200) {
          this.togglePopup({
            title: 'Space updated !',
            icon: 'success',
            timer: 1500,
          });
          setTimeout(() => {
            this.close(true);
          }, 1600);
        }
      } catch (err) {
        this.togglePopup({
          title: "Can't update space",
          html: 'Error when updating space: ' + err,
          icon: 'error',
        });
      }
    } else {
      this.togglePopup({
        title: "Can't update space",
        html: 'Some info is missing or invalid. Please check all information and try again.',
        icon: 'error',
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
