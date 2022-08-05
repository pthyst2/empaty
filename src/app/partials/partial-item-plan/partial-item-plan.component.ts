import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'partial-item-plan',
  templateUrl: './partial-item-plan.component.html',
  styleUrls: ['./partial-item-plan.component.sass'],
})
export class PartialItemPlanComponent implements OnInit {
  @Input() plan: any;
  @Input() active = false;
  @Output() selected = new EventEmitter();

  showConfirm = false;

  constructor() {}

  ngOnInit(): void {}

  catchConfirm(event: any) {
    if (event == true) {
      this.selected.emit(this.plan);
    }
  }
}
