import parent from "./parent";
import Block from "./block";


let block = new Block("Child");
parent.children.push(block);
block.render(parent);