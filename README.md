
# [TejasBhitle.github.io](https://tejasbhitle.github.io)
 
### Branch Conventions
`master` : Contains minified code which is hosted <br>
`gh-pages` : default branch to where angular-cli-pages deploys the minified code. <br>
`source-code` : Actual source code. <br>

<br>

## Local Setup

1. Clone this repo
2. Switch to `source-code` branch.
3. Run `npm install` to build node_modules
4. Run `ng serve --poll=2000`. Navigate to `http://localhost:4200/`.

<br><br>

## Deployment

1. Install angular-cli-ghpages
```
$ npm install -g angular-cli-ghpages 
```
2. Build the project in prod environment with correct base href location
```
ng deploy --base-href=https://<username>.github.io
```
3. Minified code will be generated from dist/app folder.
4. This minified code will also be automatically published to `gh-pages` branch of this repo.
5. Raise and merge PR from `gh-pages` to `master`.
6. Done. Your angular app will be hosted at ```https://<username>.github.io/```

<br><br>

## Other Angular commands
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.12.

### Development server

Run `ng serve --poll=2000` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
