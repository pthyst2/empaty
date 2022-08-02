// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appName: 'Empaty',
  apiUrl: 'http://magento.optimizer.vn/rest/V2/',
  testApi: 'https://pokeapi.co/api/v2/',
  imageUrls: {
    none: 'assets/images/solids/no-image.png',
    logos: 'assets/images/solids/logos/',
    icon: 'assets/images/solids/icons/',
    space: 'assets/images/solids/spaces/',
    svg: 'assets/images/solids/svgs/',
    blog: 'assets/images/mocks/blog_thumbnails/',
    thumbnail: 'assets/images/solids/thumbnails/',
    product: 'assets/images/mocks/products/',
    spaceItem: 'assets/images/mocks/space_items/',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
