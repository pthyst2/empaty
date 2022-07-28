import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'partial-item-function',
  templateUrl: './partial-item-function.component.html',
  styleUrls: ['./partial-item-function.component.sass'],
})
export class PartialItemFunctionComponent implements OnInit {
  @Input() item: any = {
    icon: '',
    title: 'Function title',
    description: 'Function description',
  };

  constructor() {}

  ngOnInit(): void {}
}
