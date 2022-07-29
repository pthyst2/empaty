import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/utilities/seo.service';
import { SpaceService } from 'src/app/services/data/space.service';
@Component({
  selector: 'page-member-public-spaces',
  templateUrl: './page-member-public-spaces.component.html',
  styleUrls: ['./page-member-public-spaces.component.sass'],
})
export class PageMemberPublicSpacesComponent implements OnInit {
  spaces: any = [];
  constructor(private seo: SeoService, private spaceService: SpaceService) {}
  ngOnInit(): void {
    this.setSEO();
    this.loadPublishedSpaces();
  }
  setSEO() {
    this.seo.setTitle('Public Spaces');
  }
  loadPublishedSpaces() {
    let res = this.spaceService.getPublishedSpaces();
    this.spaces = res.data;
  }
}
