import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'partial-list-public-spaces',
  templateUrl: './partial-list-public-spaces.component.html',
  styleUrls: ['./partial-list-public-spaces.component.sass'],
})
export class PartialListPublicSpacesComponent implements OnInit {
  @Input() spaces: any = [];

  constructor() {}

  ngOnInit(): void {}
}
