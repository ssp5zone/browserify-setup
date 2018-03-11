var browserify = require('browserify');
var fse = require('fs-extra');

var config = {
    basedir: "public",
    entries: "app/es6/main.js",
    transform: [ 
        "es6ify",
        "html2js-browserify",
        "browserify-css",
    ],
    debug: true,
};

var output = 'public/dist/es6/bundle.js';
fse.ensureFileSync(output);
var bundleFs = fse.createWriteStream(output);


var b = browserify(config);
b.bundle().pipe(bundleFs);