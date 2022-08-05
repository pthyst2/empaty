import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'partial-list-plans',
  templateUrl: './partial-list-plans.component.html',
  styleUrls: ['./partial-list-plans.component.sass'],
})
export class PartialListPlansComponent implements OnInit {
  @Input() plans: any = [];
  @Input() userPlan: any = {
    _id: '1',
  };
  @Output() selected = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  select(plan: any) {
    this.selected.emit(plan);
  }
}
