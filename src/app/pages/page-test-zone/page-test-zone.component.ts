import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-test-zone',
  templateUrl: './page-test-zone.component.html',
  styleUrls: ['./page-test-zone.component.sass'],
})
export class PageTestZoneComponent implements OnInit {
  modal = {
    title: 'Test modal',
    icon: 'success',
    html: '<p><i>This is HTML</i></p>',
  };

  constructor() {}

  ngOnInit(): void {}
}
