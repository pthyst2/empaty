import { Component } from '@angular/core';
import { solidLanguages } from 'src/app/data/solids/solidLanguages';
import { FixedItemBaseComponent } from '../fixed-item-base/fixed-item-base.component';
@Component({
  selector: 'fixed-item-multi-languages',
  templateUrl: './fixed-item-multi-languages.component.html',
  styleUrls: ['./fixed-item-multi-languages.component.sass'],
})
export class FixedItemMultiLanguagesComponent extends FixedItemBaseComponent {
  languages: any = solidLanguages;
}
