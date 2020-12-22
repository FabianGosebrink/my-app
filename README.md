# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build core` and then `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Note

'ng build core' will fail due to the following problem: https://github.com/ng-packagr/ng-packagr/issues/1285

## Fix

To fix the library build problem, disable umd in ng-packard. But this seems to disable lazy loading for the library at all :-( see: https://github.com/ng-packagr/ng-packagr/issues/1285#issuecomment-577729243:

In file node_modules/ng-packagr/lib/flatten/rollup.js
 const bundle = yield rollup.rollup({
            context: 'this',
            external: moduleId => externalModuleIdStrategy.isExternalDependency(moduleId),
            inlineDynamicImports: true,  // CHANGE THIS TO TRUE
