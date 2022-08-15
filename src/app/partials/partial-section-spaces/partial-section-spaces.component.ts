import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'partial-section-spaces',
  templateUrl: './partial-section-spaces.component.html',
  styleUrls: ['./partial-section-spaces.component.sass'],
})
export class PartialSectionSpacesComponent implements OnInit {
  @Input() spaces: any = [];

  btnMoreSpace = {
    label: 'Explore more space',
  };

  constructor() {}

  ngOnInit(): void {}
}
