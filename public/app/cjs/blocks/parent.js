var parent = require("./grandParent");
var Block = require("./block");


var block = new Block("Parent");
parent.children.push(block);
block.render(parent);
module.exports = block;