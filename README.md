
# TejasBhitle.github.io-Source

This is the source code for my website https://tejasbhitle.github.io<br>
Minified code is published on https://github.com/TejasBhitle/TejasBhitle.github.io


## To deploy an angular project on github pages

1. Install angular-cli-ghpages
```
$ npm install -g angular-cli-ghpages 
```
2. Build the project in prod environment with correct base href location
```
ng deploy --prod --base-href=https://<username>.github.io
```
3. Copy the contents from dist/app folder to the hosting repo

4. Done. Your angular app will be hosted at ```https://<username>.github.io/```




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.12.

## Development server

Run `ng serve --poll=2000` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
