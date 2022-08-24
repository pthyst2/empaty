import { Component, OnInit, Input, Output } from '@angular/core';
import { ModalBaseComponent } from '../modal-base/modal-base.component';
import { SpaceService } from 'src/app/services/data/space.service';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: ' modal-delete-space',
  templateUrl: './modal-delete-space.component.html',
  styleUrls: ['./modal-delete-space.component.sass'],
})
export class ModalDeleteSpaceComponent extends ModalBaseComponent {
  @Input() override static = false;
  @Input() space: any;
  popup: any = {
    show: false,
    icon: 'success',
    title: "",
    html: "", timer: undefined
  }
  sub = new Subscription();
  constructor(private spaceService: SpaceService, private translate: TranslateService) {
    super();
  }
  override ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
  override close(value?: any) {
    super.close(value ? value : false)
  }

  confirmDelete() {
    this.sub.add(this.spaceService.deleteSpace(this.space.id).subscribe({
      next: (res: any) => {
        this.sub.add(this.translate.get('popups.titles.success-delete-space').subscribe(
          (res: any) => {
            this.popup = {
              show: true,
              icon: 'success',
              title: res,
              timer: 1000
            },
              setTimeout(
                () => {
                  this.close(true);
                  window.location.reload();
                }, 1000
              )
          }
        ))
      },
      error: (err) => {
        console.error(err);
        this.popup = {
          show: true,
          icon: 'error',
          title: '',
          html: ''
        };
        this.sub.add(this.translate.get('popups.titles.fail-delete-space').subscribe(
          (res: any) => {
            this.popup.title = res
          }
        ));
        this.sub.add(this.translate.get('popups.html.error').subscribe(
          (res: any) => {
            this.popup.html = res + ": " + err
          }
        ))
      }
    }))
  }
}
