class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.left = b;
a.right = c;
b.left = d;

// recursive depth first traversal
function Depth_first_traversal(root) {
  // prevent an emtply tree
  if (root === null) return [];
  return [
    root.value,
    ...Depth_first_traversal(root.left),
    ...Depth_first_traversal(root.right),
  ];
}

console.log(Depth_first_traversal(a));
// -> ['a' , 'b' , 'c' , 'd']
