import { Component, OnInit, OnDestroy } from '@angular/core';
import { SeoService } from 'src/app/services/utilities/seo.service';
import { SpaceService } from 'src/app/services/data/space.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'page-member-public-spaces',
  templateUrl: './page-member-public-spaces.component.html',
  styleUrls: ['./page-member-public-spaces.component.sass'],
})
export class PageMemberPublicSpacesComponent implements OnInit, OnDestroy {
  loading = false;
  spaces: any = [];
  subs = new Subscription;

  constructor(private seo: SeoService, private spaceService: SpaceService) { }
  ngOnInit(): void {
    this.setSEO();
    this.loadSpaces();
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  setSEO() {
    this.seo.setTitle('Public Spaces');
  }
  loadSpaces() {
    this.loading = true;
    this.subs.add(
      this.spaceService.getPublishedSpaces().subscribe({
        next: (res: any) => {
          this.loading = false;
          this.spaces = res.data.paidfloors.items;
        },
        error: (err) => {
          console.error('Error when getting published space: ', err)
        }
      })
    )
  }
}
