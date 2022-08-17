import { Component, OnInit } from '@angular/core';
//#region Solids
import { solidFunctions } from 'src/app/data/solids/solidFunctions';
//#endregion

//#region Services
import { SpaceService } from 'src/app/services/data/space.service';
import { BlogService } from 'src/app/services/data/blog.service';
import { SeoService } from 'src/app/services/utilities/seo.service';
//#endregion

@Component({
  selector: 'page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.sass'],
})
export class PageHomeComponent implements OnInit {
  sectionSpaces: any = {
    title: 'Various Utilization Scenes',
    data: [],
  };

  sectionFunctions: any = {
    title: 'Functions',
    description: 'Functions section description',
    bgColor: 'grey',
    buttonViewMore: {
      label: 'View more',
    },
    data: solidFunctions,
  };

  sectionNews: any = {
    title: 'Japanese Latest News',
    buttonViewMore: {
      label: 'View more',
    },
    data: [],
  };

  constructor(
    private spaceService: SpaceService,
    private blogService: BlogService,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.setSEO();
    this.loadSpaces();
    this.loadBlogs();
  }

  setSEO() {
    this.seo.setTitle('Empaty', true);
  }

  loadSpaces() {
    this.sectionSpaces.data = [];
  }
  loadBlogs() {
    try {
      let body = {
        limit: 6,
        offset: 0,
      };
      let res = this.blogService.getBlogs(body);
      this.sectionNews.data = res.data;
    } catch (err) {
      console.error('Error when loading spaces: ', err);
    }
  }
}
