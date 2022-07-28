import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { SpaceService } from 'src/app/services/data/space.service';
import { PopupMessageService } from 'src/app/services/utilities/popup-message.service';
import { SeoService } from 'src/app/services/utilities/seo.service';
import { AuthService } from 'src/app/services/data/auth.service';
import { CollaboratorService } from 'src/app/services/data/collaborator.service';
import { mockServiceTypes } from 'src/app/data/mocks/mockServiceTypes';

@Component({
  selector: 'page-member-home',
  templateUrl: './page-member-home.component.html',
  styleUrls: ['./page-member-home.component.sass'],
})
export class PageMemberHomeComponent implements OnInit {
  faSearch = faMagnifyingGlass;

  iconUrl = environment.imageUrls.icon;
  svgUrl = environment.imageUrls.svg;

  spaceIcon = this.iconUrl + 'space.png';
  spaceIconColor = this.iconUrl + 'space-color.png';
  xCircleIcon = this.svgUrl + 'x-circle.svg';
  addSpaceByImageIcon = this.svgUrl + 'add-space-by-image.svg';
  addSpaceByEditorIcon = this.svgUrl + 'add-space-by-editor.svg';

  spaces: any = [];
  limit = 10;

  serviceTypes: any;

  search: any = {
    serviceType: '',
    keyword: '',
  };

  pagination = {
    pages: 1,
    currentPage: 1,
  };

  modals: any = {
    createSpace: false,
  };

  collaborators: any = [];

  constructor(
    private spaceService: SpaceService,
    private popupService: PopupMessageService,
    private authService: AuthService,
    private collabService: CollaboratorService,

    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.setSEO();
    this.loadServiceTypes();
    this.searchSpacesNoLimit();
    this.loadCollaborators();
  }

  setSEO() {
    this.seo.setTitle('Company Spaces');
  }

  loadSpaces(body?: any) {
    try {
      let res = this.spaceService.getSpaces(body);
      this.spaces = [];
      this.spaces = res.data;
      this.pagination.pages = res.pages;
      this.pagination.currentPage = body && body.page ? body.page : 1;
    } catch (err) {
      this.popupService.error({
        title: 'Load spaces failed',
        html: err,
      });
    }
  }

  loadServiceTypes() {
    this.serviceTypes = mockServiceTypes;
  }

  loadCollaborators() {
    try {
      let userId: any = this.authService.getUserDecoded()._id;
      let res: any = this.collabService.getCollaborators(userId);
      this.collaborators = res.data;
    } catch (err) {
      console.error('Error when loading collaborators: ', err);
    }
  }

  searchSpaces(page?: number) {
    let body = {
      serviceType: this.search.serviceType,
      keyword: this.search.keyword,
      page: page ? page : 1,
      offset: 0,
      limit: this.limit,
    };
    if (page) {
      body.offset = page > 1 ? this.limit * (page - 1) : 0;
    }

    this.loadSpaces(body);
  }

  searchSpacesNoLimit() {
    let body = {
      serviceType: this.search.serviceType,
      keyword: this.search.keyword,
    };
    let res = this.spaceService.getSpacesNoLimit(body);
    this.spaces = res.data;
  }

  toggleModal(name: string) {
    switch (name) {
      case 'create-space': {
        this.modals.createSpace = !this.modals.createSpace;
        break;
      }
    }
  }

  catchModalCreateSpace(event: any) {
    this.modals.createSpace = false;
    if (event != false) {
      this.searchSpaces(this.pagination.currentPage);
    }
  }
}
