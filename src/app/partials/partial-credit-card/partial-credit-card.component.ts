import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: ' partial-credit-card',
  templateUrl: './partial-credit-card.component.html',
  styleUrls: ['./partial-credit-card.component.sass'],
})
export class PartialCreditCardComponent implements OnInit {
  @Input() card: any = {
    holder: 'Huynh Thuy Linh',
    last4: '6789',
    expMonth: 5,
    expYear: 27,
    type: 'visa',
  };
  image: any;
  imageUrl = environment.imageUrls.logos;
  constructor() {}
  ngOnInit(): void {
    this.renderImage();
  }
  renderImage() {
    switch (this.card.type) {
      case 'visa': {
        this.image = this.imageUrl + 'logo-visa.png';
        break;
      }
      case 'master': {
        this.image = this.imageUrl + 'logo-master-card.png';
        break;
      }
      case 'jcb': {
        this.image = this.imageUrl + 'logo-jcb.png';
        break;
      }
    }
  }
}
