import parent from "./grandParent";
import Block from "./block";


let block = new Block("Parent");
parent.children.push(block);
block.render(parent);

export default block;