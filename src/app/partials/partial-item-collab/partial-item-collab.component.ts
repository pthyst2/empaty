import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'partial-item-collab',
  templateUrl: './partial-item-collab.component.html',
  styleUrls: ['./partial-item-collab.component.sass']
})
export class PartialItemCollabComponent implements OnInit {
  @Input() collab: any;
  constructor() { }

  ngOnInit(): void {
  }

}
