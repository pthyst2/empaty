import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/utilities/seo.service';
import { SpaceService } from 'src/app/services/data/space.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'page-member-statistics',
  templateUrl: './page-member-statistics.component.html',
  styleUrls: ['./page-member-statistics.component.sass'],
})
export class PageMemberStatisticsComponent implements OnInit {
  spaces: any = [];
  loading = false;
  tabs = ['Lifetime', '30 Days', '7 Days'];
  tabActive = 'Lifetime';

  total = {
    impressions: 0,
    visits: 0,
  };

  constructor(private seo: SeoService, private spaceService: SpaceService) {}
  ngOnInit(): void {
    this.setSEO();
    this.getSpaces();
  }
  setSEO() {
    this.seo.setTitle('Statistic');
  }
  getSpaces() {
    this.loading = true;
    //let res: any = this.spaceService.getSpaces();
    this.spaces = [];
    for (let space of this.spaces) {
      if (!space.thumbnail) {
        space.thumbnail = environment.imageUrls.none;
      }
    }
    this.total.impressions = this.spaces.reduce(
      (preResult: any, currentItem: any) =>
        preResult + currentItem.statistics?.impressions,
      0
    );
    this.total.visits = this.spaces.reduce(
      (preResult: any, currentItem: any) =>
        preResult + currentItem.statistics?.visits,
      0
    );
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }
  activeTab(name: string) {
    this.tabActive = name;
  }
}
