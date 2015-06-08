/*

function Archiver() {
    var temperature = null;
    var archive = [];
    Object.defineProperty(this, 'temperature', {
      get: function() { return temperature; },
      set: function(x) {
        temperature = x;
        archive.push({
          date: new Date(),
          val: x
        });
      }
    });
    
    this.getArchive = function() {return archive;};
}




*/


function Archiver() {
    var temperature = null;
    var archive = [];
    //TODO: implement "Archiver" as a self-archiving object
    //...ensure that when "temperature" property is
    //...set, that the array returned by getArchive
    //...gets a log entry in the form of {date:,val:}
    
    this.__defineGetter__("temperature", function(){
        return temperature;
    });
   
    this.__defineSetter__("temperature", function(val){
        archive.push({date: Date.now(), val: val});
        temperature = val;
    });
    
    this.getArchive = function() {return archive;};
}


var a = new Archiver();
	
	a.temperature = 33;
	a.temperature = 28;
	a.temperature = 21;
	
	console.log(a.getArchive());
	
	
