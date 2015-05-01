// CIT 281 Project 3 - arrays.js by Kathryn Fortner

var arrAvg = function(array) {
	"use strict";
	var Sum = 0
	var average
	
	for(var i = 0; i < array.length; i++) {
		Sum = Sum + array[i];
		average = Sum / array.length;
	};
	return average;
};

var arrMax = function(array) {
	"use strict";
	return Math.max(array);
};

var isMember = function(array, str) {
	"use strict";
	
};