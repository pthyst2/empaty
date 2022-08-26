import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CollaboratorService } from 'src/app/services/data/collaborator.service';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'page-member-users',
  templateUrl: './page-member-users.component.html',
  styleUrls: ['./page-member-users.component.sass']
})
export class PageMemberUsersComponent implements OnInit, OnDestroy {
  loading = false;
  faSearch = faMagnifyingGlass;

  searchForm = this.fb.group({
    name: [''],
    status: ['All']
  })
  statuses: any = [];
  collabs: any = [];

  subs = new Subscription;

  constructor(private fb: FormBuilder, private collabService: CollaboratorService) { }

  ngOnInit(): void {
    this.getStatuses();
    this.loadCollabs();
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }
  loadCollabs() {
    this.loading = true;
    setTimeout(
      () => {
        this.collabs = this.collabService.getCollaborators('1').data;
        this.loading = false;
        console.log("this.collabs: ", this.collabs);
      }, 1500
    )

  }
  getStatuses() {
    this.statuses = this.collabService.getStatuses();
  }
}
