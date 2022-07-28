import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'partial-section-base',
  templateUrl: './partial-section-base.component.html',
  styleUrls: ['./partial-section-base.component.sass'],
})
export class PartialSectionBaseComponent implements OnInit {
  @Input() title: string = 'Section title';
  @Input() description: string = '';
  @Input() classes: string = '';
  constructor() {}

  ngOnInit(): void {}
}
