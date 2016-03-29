(function(){
	"use strict";

	module.exports = function(thing){

		var thingsThatAre22 = [
			22, 
			"22", 
			"twenty two", 
			"twenty-two"
		];

		return thingsThatAre22.indexOf(thing) > -1;
	};

})();