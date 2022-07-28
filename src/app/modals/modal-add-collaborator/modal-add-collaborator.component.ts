import { Component,   Output, EventEmitter, Input } from '@angular/core';
import { ModalBaseComponent } from '../modal-base/modal-base.component';
import { FormBuilder, Validators } from '@angular/forms';
import { PopupMessageService } from 'src/app/services/utilities/popup-message.service';
 
@Component({
  selector: 'modal-add-collaborator',
  templateUrl: './modal-add-collaborator.component.html',
  styleUrls: ['./modal-add-collaborator.component.sass'],
})
export class ModalAddCollaboratorComponent extends ModalBaseComponent {
  @Output() override closed = new EventEmitter<any>;
  @Input() space: any = '';
  @Input() collaborators : any = [];
  @Input() override static: boolean = false;
  
  form = this.fb.group({
    space: ['',[Validators.required]],
    email: ['',[Validators.required]],
    role: ['view']
  })
  submitted: boolean = false;
  constructor(private fb: FormBuilder, private popup: PopupMessageService){
    super()
  } 
  override close(){
    this.closed.emit(false)
  }

  get ctr(){
    return this.form.controls
  }

  isCtrInvalid(control: any) {
    return (control.dirty || this.submitted) && control.invalid
  }

  submitForm(){
    this.submitted = true;
    this.ctr.space.setValue(this.space._id); 
    if (this.form.valid) {
      this.closed.emit(true);
      this.popup.success({
        title: 'Collaborator addedd'
      }) 
    }
    else {
      this.popup.error({
        title: 'Missing or invalid infomation',
        html: 'Please check all information and try again.'
      })
    }
  }   

}
