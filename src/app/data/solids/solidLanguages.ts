import { environment } from 'src/environments/environment';
const svgUrl: string = environment.imageUrls.svg;

export const solidLanguages = [
  {
    label: 'English',
    icon: svgUrl + 'flag-usa.svg',
    domain: 'en',
  },
  {
    label: 'Japanese',
    icon: svgUrl + 'flag-japan.svg',
    domain: 'jp',
  },
];
