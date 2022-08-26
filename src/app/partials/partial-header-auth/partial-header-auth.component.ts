import { Component, OnInit } from '@angular/core';
import { solidAppInfo } from 'src/app/data/solids/solidAppInfo';
@Component({
  selector: 'partial-header-auth',
  templateUrl: './partial-header-auth.component.html',
  styleUrls: ['./partial-header-auth.component.sass'],
})
export class PartialHeaderAuthComponent implements OnInit {
  logo = solidAppInfo.logoUrl;
  constructor() { }

  ngOnInit(): void { }
}
