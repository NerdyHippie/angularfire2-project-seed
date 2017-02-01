# AngularFire2 Project Seed

*This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.25.5.*


A started project using Angular-CLI, and Firebase Auth, Database and Hosting.
- Already set up for dev and production environments
- Already set up to use all 5 auth providers from Firebase
- Already set up to use Custom Email Action Handler (currently only Reset Password is completed, Recover Password and Verify Email are in progress)
- Uses ng2-bootstrap for Nav Bar
- Should be mostly styleguide-compliant

 ## Before You Begin
 - Install [Firebase CLI](https://firebase.google.com/docs/cli/) - for deploying to Firebase Hosting (optional)  
 `npm install -g firebase-tools`
 - Set up two firebase projects - one for dev, the other for production.
 	- In the Firebase Console, enable any authentication providers you wish to use, providing the necessary API Key/Secret info.  *Do this for both projects.*  Use the Redirect URL `https://YOUR_PROJECT_ID.firebaseapp.com/emailAction` when registering your application with each provider.
 

## How To Use
  
1. Clone Project from Git
1. Find and replace: 
	- `YOUR_PROJECT_ID` - your production project ID (https://PROJECT_ID.firebaseapp.com)
	- `YOUR_API_KEY` - the API key from your production project
	- `YOUR_MESSAGE_ID` - the Message Sender Id from your production project 
	- `YOUR_DEV_PROJECT_ID` - your dev project ID.
	- `YOUR_DEV_API_KEY` - the API key from your dev project 
	- `YOUR_DEV_MESSAGE_ID` - the Message Sender Id from your dev project
1. To add more environments, check out the following files:  
	- /app/environments/env.conditions.ts
	- /app/main.ts
1. `npm install` to install dependencies	
1. `npm run start` to run your project
1. `npm run dev-build-and-deploy` to build as development and push to your dev Firebase Hosting
1. `npm run prod-build-and-deploy` to build as production and push to your production Firebase Hosting
  


## Code of Conduct

Please take a moment and read our [Code of Conduct](CODE_OF_CONDUCT.md)



## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
