import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
const iconUrl = environment.imageUrls.icon;
@Component({
  selector: 'partial-banner-home',
  templateUrl: './partial-banner-home.component.html',
  styleUrls: ['./partial-banner-home.component.sass'],
})
export class PartialBannerHomeComponent implements OnInit {
  //#region Variables
  faCirclePlay = faCirclePlay;
  title: string = 'The best 360 ° web experience';
  description: string =
    'β space is completely different from ordinary still images and videos. Create an interactive 360​​ ° global space and enable a more realistic web experience.';
  btnExperience = {
    label: 'Experience',
  };
  bottomInfos = [
    {
      icon: iconUrl + 'rotate-img.png',
      title: 'Capture a space and create a realistic 360 ° global content',
      detail:
        'You can use your existing 360 ° camera without the need for any expensive dedicated camera and equipment.',
    },
    {
      icon: iconUrl + 'file-img.png',
      title: 'Anyone can easily add information on the βspace site',
      detail:
        'There is no problem as long as you use the browser or the office application.',
    },
    {
      icon: iconUrl + 'share-img.png',
      title: 'It can be very easily embedded and shared on web sites.',
      detail: 'Embedding the embed code on your site is as easy as adding it.',
    },
  ];
  //#endregion
  constructor() {}

  ngOnInit(): void {}
}
