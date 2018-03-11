require("./main");

var bootstrapExports = require("bootstrap");
if (bootstrapExports instanceof Window) {
    console.log("Yay!! Bootstrap shimmed properly");
    // The reason this works is because browserify-shim exposes jQuery as global.jQuery
    jQuery("#boot-shim").text("SUCCESSFUL").css("color", "green");
    // Fix for https://github.com/thlorenz/browserify-shim/issues/201
    // Not needed, but still good
    window.jQuery = undefined;
}