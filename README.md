![focus](https://github.com/user-attachments/assets/a989dff6-fb48-46c7-a56f-fe46fd6c984f)

# FocusApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# FocusApi

## Development server
Run `dotnet run` for a dev server. Navigate to `https://localhost:7053/swagger/index.html` for the swagger interface.

##Entity Framework
For now we are just maintaining a single migration with some basic seeding. To update the migration/database:
1. Delete migration in solution.
2. Delete database.
3. Run `dotnet-ef migrations add InitialCreate`
4. Run `dotnet-ef database update`
