## Purpose
This project is a library containing core / shareable functionality for UI project(s). Core functionality for handling date time, local and session storage and utilty functions can be found inside.

**NOTE:** Please document changes/additions to this library in the CHANGELOG.MD by date | feature.


### Core lib directory structure
![Directory Structure](https://cdn-std.droplr.net/files/acc_699068/JD1zhP)

##### fetch-interceptors
  * **busy-loader** is a class that implements an IRunnableFetchInterceptor interface which is run before any http requests via fetch are executed.
  * **runFetchInterceptors** - this executes the fetchApiHooks collection of IRunnableFetchInterceptor implementations prior to the fetch api call being made
## Build and Test
`npm run build` to generated a dist folder with a custom package.json needed for npm publish. This package.json includes a registry path to jfrog artifactory.

**JEST** is the testing framework used in conjuction with JEST reporter for code coverage.
`npm run test` to run unit tests
`npm run test:coverage` to run unit tests

## Building, Publishing, Deploying to NPM Artifactory - CICD
You can manually publish the artifact to NPM but that isn't advised, directly. After you've run npm build, the package.json file that's copied into the ./dist folder includes a version with a `$build` replacement variable used by jenkins for versioning each build. e.g. __"version": "1.0.0-$build.3"__ Therefore, you would need to manually change that to an explicit version to push an artifact.

#### TODO
* Continue to move shared services to this library for micro frontend consumption
* %100 code coverage - modify thresholds in JEST accordinly.

## Contribute
This core library will only expand over time - open for extension, closed for modification.
