// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDedfH86mE2rAiBVPe5cylZM9UAnKpD4EQ',
    authDomain: 'my-first-561c8.firebaseapp.com',
    databaseURL: 'https://my-first-561c8.firebaseio.com',
    projectId: 'my-first-561c8',
    storageBucket: 'my-first-561c8.appspot.com',
    messagingSenderId: '518995316380'
  },
  websiteTitle: {
    zhTw: 'onfirechat',
    enUS: 'onfirechat',
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
