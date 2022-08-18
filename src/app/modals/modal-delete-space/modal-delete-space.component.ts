import { Component, OnInit, Input, Output } from '@angular/core';
import { ModalBaseComponent } from '../modal-base/modal-base.component';
import { SpaceService } from 'src/app/services/data/space.service';
import { Subscription } from 'rxjs';
@Component({
  selector: ' modal-delete-space',
  templateUrl: './modal-delete-space.component.html',
  styleUrls: ['./modal-delete-space.component.sass'],
})
export class ModalDeleteSpaceComponent extends ModalBaseComponent {
  @Input() override static = false;
  @Input() space : any;
  popup : any = {
    show: false,
    icon: 'success',
    title: "",
    html: "",timer: undefined
  }
  sub = new Subscription();
  constructor(private spaceService: SpaceService ){
    super();
  }
  override ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
  override close(value?: any) {
    super.close(value ? value : false)
  }

  confirmDelete(){
    this.sub.add(this.spaceService.deleteSpace(this.space.id).subscribe({
      next: (res: any) => {
        this.popup = {
          show: true,
          icon: 'success',
          title: 'Space deleted',
          timer: 1000
        }
        setTimeout(
          () => {
            this.close(true);
            window.location.reload();
          },1000
        )
      },
      error: (err) => { 
        console.error(err);
        this.popup = {
          show: true,
          icon: 'error',
          title: 'Delete space failed',
          html: 'Error when delete space: ' + err
        };
      }
    }))
  }
}
