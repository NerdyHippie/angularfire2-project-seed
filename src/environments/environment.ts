// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "YOUR_DEV_API_KEY",
    authDomain: "YOUR_DEV_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_DEV_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_DEV_PROJECT_ID",
    storageBucket: "YOUR_DEV_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_DEV_MESSAGE_ID"
  }
};
