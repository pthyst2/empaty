import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { SpaceService } from 'src/app/services/data/space.service';
import { PopupMessageService } from 'src/app/services/utilities/popup-message.service';
import { SeoService } from 'src/app/services/utilities/seo.service';
import { AuthService } from 'src/app/services/data/auth.service';
import { CollaboratorService } from 'src/app/services/data/collaborator.service';
import { mockServiceTypes } from 'src/app/data/mocks/mockServiceTypes';
import { Subscription } from 'rxjs';

@Component({
  selector: 'page-member-home',
  templateUrl: './page-member-home.component.html',
  styleUrls: ['./page-member-home.component.sass'],
})
export class PageMemberHomeComponent implements OnInit, OnDestroy {
  faSearch = faMagnifyingGlass;

  iconUrl = environment.imageUrls.icon;
  svgUrl = environment.imageUrls.svg;

  spaceIcon = this.iconUrl + 'space.png';
  spaceIconColor = this.iconUrl + 'space-color.png';
  xCircleIcon = this.svgUrl + 'x-circle.svg';
  addSpaceByImageIcon = this.svgUrl + 'add-space-by-image.svg';
  addSpaceByEditorIcon = this.svgUrl + 'add-space-by-editor.svg';

  loading: boolean = false;
  spaces: any = [];
  limit = 0;

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
    createSpaceImage: false,
  };

  collaborators: any = [];
  user: any;
  popup = false;
  popupContent: any = {
    icon: '',
    title: '',
    html: '',
    timer: undefined,
  };

  subs = new Subscription();
  constructor(
    private spaceService: SpaceService,
    private popupService: PopupMessageService,
    private authService: AuthService,
    private collabService: CollaboratorService,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.setSEO();
    this.getUser();
    this.searchSpaces();
    this.loadServiceTypes();
    this.loadCollaborators();
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  setSEO() {
    this.seo.setTitle('Company Spaces');
  }
  getUser() {
    this.subs.add(
      this.authService.getUserInfo().subscribe({
        next: (res: any) => {
          this.user = res.data.userInfo;
        },
        error: (err) => {
          console.error(err);
        },
      })
    );
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
  loadSpaces(body: any) {
    this.loading = true;
    this.subs.add(
      this.spaceService.getSpaces(body).subscribe({
        next: (res: any) => {
          this.spaces = res.data.floors.items;
        },
        error: (err) => {
          console.error(err);
        },
        complete: () => {
          this.loading = false;
        },
      })
    );
  }
  loadServiceSpaces(body: any) {
    this.loading = true;
    this.subs.add(
      this.spaceService.getServiceSpaces(body).subscribe({
        next: (res: any) => {
          this.spaces = res.data.servicefloors.items;
        },
        error: (err) => {
          console.error(err);
        },
        complete: () => {
          this.loading = false;
        },
      })
    );
  }
  searchSpaces() {
    let body = {
      service: this.search.serviceType,
      keyword: this.search.keyword,
      limit: this.limit,
      start: 0,
    };

    if (body.service) {
      this.loadServiceSpaces(body);
    } else {
      this.loadSpaces(body);
    }
  }

  toggleModal(name: string, content?: any) {
    switch (name) {
      case 'create-space': {
        this.modals.createSpace = !this.modals.createSpace;
        break;
      }
      case 'create-space-editor': {
        this.modals.createSpaceImage = !this.modals.createSpaceImage;
        break;
      }
      case 'popup': {
        if (content) {
          this.popup = true;
          this.popupContent = content;
        } else {
          this.popup = false;
          this.popupContent = {
            icon: '',
            title: '',
            html: '',
            timer: undefined,
          };
        }
        break;
      }
    }
  }

  catchModalCreateSpace(event: any) {
    this.modals.createSpace = false;
    if (event != false) {
      this.searchSpaces();
    }
  }
  catchModalCreateSpaceEditor(event: any) {
    this.toggleModal('create-space-editor');
    if (event != false) {
      this.toggleModal('popup', {
        icon: 'success',
        title: 'Space Created',
        timer: 1500,
      });
    }
  }
}
