define(function(require) {
    'use strict';
    // Bootstrapping child is enough to start
    // giving require("child") does not work because the base path is ../ from here
    require('./child');    
});