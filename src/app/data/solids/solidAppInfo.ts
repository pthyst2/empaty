import { environment } from 'src/environments/environment';
const logoUrl = environment.imageUrls.logos;
export const solidAppInfo = {
  name: 'Empaty',
  languages: ['jp', 'en'],
  logoUrl: logoUrl + 'logo-roommaker.svg',
  logoColorUrl: logoUrl + 'logo-roommaker.svg',
  contact: {
    support: {
      phone: '0523187254',
      email: 'support@empaty.jp',
    },
  },
  socials: {
    instagram: 'https://www.instagram.com/',
    twitter: 'https://www.twitter.com/',
    facebook: 'https://www.facebook.com/',
  },
};
