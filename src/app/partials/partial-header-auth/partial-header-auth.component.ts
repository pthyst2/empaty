import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'partial-header-auth',
  templateUrl: './partial-header-auth.component.html',
  styleUrls: ['./partial-header-auth.component.sass'],
})
export class PartialHeaderAuthComponent implements OnInit {
  logo = environment.imageUrls.logos + 'logo-empaty.svg';
  constructor() {}

  ngOnInit(): void {}
}
