function Event() {
  //your implementation goes here  
  console.log(Event.calls);
}


 function f() {
        f.calls = (f.calls || 0) + 1;
        f.args = Array.prototype.slice.call(arguments);
        console.log(f.calls);
 }


(function() {
	var ev = new Event();
	f();
})();
