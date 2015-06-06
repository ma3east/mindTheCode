
// this is the slot class, denotates how all slots behave
function Slot (){
	
	this.available = ["apple", "orange", "pear"];
	this.pose = this.available[0];
	this.getVisibleImage = function () {
	
		return this.pose;
	};
	
	this.oneIteration = function () {
		
		var currentIndex = this.available.indexOf(this.pose);
		
		this.pose = this.available[currentIndex + 1];
		
	}

	
}





// this an instance of a slot
var slot = new Slot();
