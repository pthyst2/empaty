import { Component, OnInit } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'partial-loading',
  templateUrl: './partial-loading.component.html',
  styleUrls: ['./partial-loading.component.sass'],
})
export class PartialLoadingComponent implements OnInit {
  faSpinner = faSpinner;
  constructor() {}

  ngOnInit(): void {}
}
