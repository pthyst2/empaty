import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/utilities/seo.service';
@Component({
  selector: 'page-member-statistics',
  templateUrl: './page-member-statistics.component.html',
  styleUrls: ['./page-member-statistics.component.sass'],
})
export class PageMemberStatisticsComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.setSEO();
  }
  setSEO() {
    this.seo.setTitle('Statistic');
  }
}
