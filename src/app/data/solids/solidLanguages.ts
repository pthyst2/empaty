import { environment } from 'src/environments/environment';
const svgUrl: string = environment.imageUrls.svg;

export const solidLanguages = [
  {
    label: 'English',
    icon: svgUrl + 'flag-usa.svg',
    value: 'en',
  },
  {
    label: 'Japanese',
    icon: svgUrl + 'flag-japan.svg',
    value: 'ja',
  },
];
