import { environment } from 'src/environments/environment';
const flagUrl = environment.imageUrls.svg + 'flags/';
export const solidCountries = [
  {
    name: 'Japan',
    value: 'JP',
    flag: flagUrl + 'jp.svg',
    countryCode: '81',
  },
  {
    name: 'United Kingdom of Great Britain and North Ireland',
    value: 'GB',
    flab: flagUrl + 'gb.svg',
    countryCode: '44',
  },
];
