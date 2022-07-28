import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'partial-section-spaces',
  templateUrl: './partial-section-spaces.component.html',
  styleUrls: ['./partial-section-spaces.component.sass'],
})
export class PartialSectionSpacesComponent implements OnInit {
  @Input() title: string = 'Section title';
  @Input() description: string = '';
  @Input() spaces: any = [];

  msg = {
    noSpace: 'You do not have any space.',
  };

  btnMoreSpace = {
    label: 'Explore more space',
  };

  constructor() {}

  ngOnInit(): void {}
}
