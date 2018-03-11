var browserify = require('browserify');
var fse = require('fs-extra');   // internal dependency of browserify, not seperatly installed

var config = {
    basedir: "public",
    entries: "app/amd/main.js",
    transform: [ 
        "deamdify",
    ],
};

// The following code is native Node.js code
// nothing to do with browserify
var output = 'public/dist/amd/bundle.js';
// check if file and directories exists. If not create them
// This is the -extra feature in fse that is not there in original fs.
fse.ensureFileSync(output);
// Create a write stream for the pipe to output to
var bundleFs = fse.createWriteStream(output);


var b = browserify(config);
b.bundle().pipe(bundleFs);