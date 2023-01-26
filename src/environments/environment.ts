
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { IEnvironment } from './environment.interface';


export const environment: IEnvironment = {
	keySecret: '',
	serverImageUrl: '',
	production: false,
	baseUrl: 'http://localhost:8080/api',
	siteKey: '6LflW94cAAAAAFfCeJljHZaBWNhe-eNSYmkO5YxE'
};

/*
 * For easier debugging in development type, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production type because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.