import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { FormBuilder } from '@angular/forms';
//#region Services
import { TranslateService } from '@ngx-translate/core';
import { SpaceService } from 'src/app/services/data/space.service';
import { PopupMessageService } from 'src/app/services/utilities/popup-message.service';
import { SeoService } from 'src/app/services/utilities/seo.service';
import { AuthService } from 'src/app/services/data/auth.service';
import { CollaboratorService } from 'src/app/services/data/collaborator.service';
//#endregion

import { mockServiceTypes } from 'src/app/data/mocks/mockServiceTypes';

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

  searchForm = this.fb.group({
    name: [''],
    service: ['']
  })

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
  placeholders = {
    search: ''
  }
  constructor(
    private spaceService: SpaceService,
    private popupService: PopupMessageService,
    private fb: FormBuilder,
    private authService: AuthService,
    private collabService: CollaboratorService,
    private seo: SeoService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.setSEO();
    this.getUser();
    this.loadSpaces();
    this.loadServiceTypes();
    this.loadCollaborators();
    this.getPlaceholders();
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  setSEO() {
    let input: any = {
      title: 'Company Spaces',
      description: 'Description of spaces',
    }
    this.seo.setSeoForPage(input)
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
  get ctr() {
    return this.searchForm.controls;
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
  loadSpaces() {
    this.loading = true;
    let body = {
      service: this.ctr.service.value,
      name: this.ctr.name.value,
      limit: this.limit,
      start: 0,
    };
    this.subs.add(
      this.spaceService.getSpaces(body).subscribe({
        next: (res: any) => {
          this.spaces = res.data.searchfloors.items;
          console.log("this.spaces: ", this.spaces);
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
      this.loadSpaces();
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
  getPlaceholders() {
    this.subs.add(this.translate.get('pageMemberHome.placeholders.search').subscribe(
      (res: any) => { this.placeholders.search = res }
    ))
  }
}
