// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { HttpHeaders } from '@angular/common/http';

export const environment = {
  production: false,
  ERGAST_API: 'http://ergast.com/api/f1',
  FORMAT: '.json',
  RAPIDAPI_F1: 'https://api-formula-1.p.rapidapi.com',
  RAPIDAPI_F1_HEADERS: new HttpHeaders()
    .set('x-rapidapi-key', 'f106352d4emsh6cd59fabb51059dp1ec488jsn218d1cef7a11')
    .set('x-rapidapi-host', 'api-formula-1.p.rapidapi.com'),
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
