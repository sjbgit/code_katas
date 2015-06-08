function countNodes(tree) {
	 //this.count = 0;

	if (tree === null) {
		//return this.count;
		return 0;
	}
  
  //have to check for undefined or something
  else if (tree.left === null && tree.right === null) {
    
    return 1;
  }
  


  return countNodes(tree.left) + countNodes(tree.right);
  //if it is null return 0
  //both are null then return 1
  //call countNodes -> countNodex(left) + countNodes(right)


}