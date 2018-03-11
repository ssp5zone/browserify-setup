var browserify = require('browserify');
var fse = require('fs-extra');   // internal dependency of browserify, not seperatly installed

var config = {
    basedir: "public",
    entries: "app/cjs/main.js",
    paths: [
        // Remmember: PATHS cannot be used inside 'fs'
        // package.json "browser" creates alias, whereas "paths" tell where to look for modules
        // Just for demo. Global is applied here anyways
        "../node_modules/prismjs/plugins/normalize-whitespace/",
    ],
    transform: [ 
        // this replaces fs read entries in any file to the actual file content
        // Eg. HTML templates
        // Just for demo. Global is applied here anyways
        "brfs", // npm install needed
    ],
};

// The following code is native Node.js code
// nothing to do with browserify
var output = 'public/dist/cjs/bundle.js';
// check if file and directories exists. If not create them
// This is the -extra feature in fse that is not there in original fs.
fse.ensureFileSync(output);
// Create a write stream for the pipe to output to
var bundleFs = fse.createWriteStream(output);


var b = browserify(config);
b.bundle().pipe(bundleFs);