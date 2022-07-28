import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'partial-section-spaces-large',
  templateUrl: './partial-section-spaces-large.component.html',
  styleUrls: ['./partial-section-spaces-large.component.sass'],
})
export class PartialSectionSpacesLargeComponent implements OnInit {
  @Input() spaces: any = [];
  @Input() collaborators: any = [];
  msg = {
    noSpace: 'You have no space yet.',
  };
  constructor() {}

  ngOnInit(): void {}
}
