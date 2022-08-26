import { Component, OnInit, OnDestroy } from '@angular/core';
import { SeoService } from 'src/app/services/utilities/seo.service';
import { SpaceService } from 'src/app/services/data/space.service';
import { ImageService } from 'src/app/services/utilities/image.service';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'page-member-statistics',
  templateUrl: './page-member-statistics.component.html',
  styleUrls: ['./page-member-statistics.component.sass'],
})
export class PageMemberStatisticsComponent implements OnInit, OnDestroy {
  noImage = environment.imageUrls.none;
  spaces: any = [];
  loading = false;
  tabActive = 'lifetime';

  total = {
    impressions: 0,
    visits: 0,
  };
  subs = new Subscription;
  constructor(private seo: SeoService, private spaceService: SpaceService, private translate: TranslateService, public imageService: ImageService) { }
  ngOnInit(): void {
    this.setSEO();
    this.getSpaces();
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  setSEO() {
    this.seo.setTitle('Statistic');
  }
  getSpaces() {
    this.loading = true;
    //let res: any = this.spaceService.getSpaces();
    this.spaces = [];
    this.subs.add(this.spaceService.getSpaces().subscribe({
      next: (res: any) => {
        this.spaces = res.data.searchfloors.items;

        console.log("this.spaces: ", this.spaces);

        this.total.impressions = this.spaces.reduce(
          (preResult: any, currentItem: any) =>
            preResult + 99,
          0
        );
        this.total.visits = this.spaces.reduce(
          (preResult: any, currentItem: any) =>
            preResult + 99,
          0
        );
        this.loading = false;
      },
      error: (err) => {
        console.error("Error when getting spaces: ", err)
      }
    }))
  }
  activeTab(name: string) {
    this.tabActive = name;
  }
}
