define(["require", "insert-css", "prismjs", "prism-normalize-whitespace"], function(require, insertCSS) {
   'use strict';

    var fs = require("fs"), 
    prismTheme = fs.readFileSync("node_modules/prismjs/themes/prism-coy.css", 'utf8');
    
    insertCSS(prismTheme);

    // "css!node_modules/prismjs/themes/prism-coy"
    Prism.highlightAll(); // Known bug for prism: https://github.com/PrismJS/prism/issues/903

});