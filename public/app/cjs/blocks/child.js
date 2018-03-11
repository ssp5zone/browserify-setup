var parent = require("./parent");
var Block = require("./block");


var block = new Block("Child");
parent.children.push(block);
block.render(parent);