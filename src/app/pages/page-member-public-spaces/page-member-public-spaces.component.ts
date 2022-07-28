import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/utilities/seo.service';
@Component({
  selector: 'page-member-public-spaces',
  templateUrl: './page-member-public-spaces.component.html',
  styleUrls: ['./page-member-public-spaces.component.sass'],
})
export class PageMemberPublicSpacesComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.setSEO();
  }
  setSEO() {
    this.seo.setTitle('Public Spaces');
  }
}
