import { Component, OnInit, Input } from '@angular/core';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { PopupMessageService } from 'src/app/services/utilities/popup-message.service';
@Component({
  selector: 'partial-footer-auth',
  templateUrl: './partial-footer-auth.component.html',
  styleUrls: ['./partial-footer-auth.component.sass'],
})
export class PartialFooterAuthComponent implements OnInit {
  faCirclePlay = faCirclePlay;
  @Input() navs: any = [];

  btnExp = {
    label: 'Experience',
  };

  constructor(private popupService: PopupMessageService) {}

  ngOnInit(): void {}

  comingSoon() {
    this.popupService.underConstruct();
  }
}
