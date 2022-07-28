import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'partial-header-error',
  templateUrl: './partial-header-error.component.html',
  styleUrls: ['./partial-header-error.component.sass'],
})
export class PartialHeaderErrorComponent implements OnInit {
  logoUrl = environment.imageUrls.logos + 'logo-empaty.svg';
  constructor() {}

  ngOnInit(): void {}
}
