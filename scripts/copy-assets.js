const shell = require('shelljs');

// Copy asset files to the appropriate dist
shell.cp('-R', `./config/package.json`, `./dist`);
