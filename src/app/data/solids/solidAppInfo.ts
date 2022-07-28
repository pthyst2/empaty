import { environment } from 'src/environments/environment';
const logoUrl = environment.imageUrls.logos;
export const solidAppInfo = {
  name: 'BSpace',
  languages: ['jp', 'en'],
  logoUrl: logoUrl + 'logo-empaty.svg',
  socials: {
    instagram: 'https://www.instagram.com/',
    twitter: 'https://www.twitter.com/',
    facebook: 'https://www.facebook.com/',
  },
};
