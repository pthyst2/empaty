import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'partial-list-collaborators',
  templateUrl: './partial-list-collaborators.component.html',
  styleUrls: ['./partial-list-collaborators.component.sass'],
})
export class PartialListCollaboratorsComponent implements OnInit {
  @Input() collaborators: any = [];
  actives: any = [];
  pendings: any = [];

  tab = 'active';
  dataDisplay: any = [];

  constructor() {}

  ngOnInit(): void {
    this.splitCollaborators();
  }

  splitCollaborators() {
    for (let collab of this.collaborators) {
      switch (collab.status.value) {
        case 'active': {
          this.actives.push(collab);
          break;
        }
        case 'pending': {
          this.pendings.push(collab);
          break;
        }
      }
    }
    this.showTab('active');
  }

  showTab(name: string) {
    this.tab = name;
    switch (name) {
      case 'active': {
        this.dataDisplay = this.actives;
        break;
      }
      case 'pending': {
        this.dataDisplay = this.pendings;
        break;
      }
    }
  }
}
