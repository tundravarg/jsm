$JSM.module('org.tuman.jsm.test.module1', function() {



'use strict';

console.log('---- init 1');

var module2 = $JSM.require('org.tuman.jsm.test.module2');



this.func1 = function() {
	console.log('---------- 1.1');
	module2.func();
}

this.func2 = function() {
	console.log('---------- 1.2');
}



console.log('---- init 1 DONE');



});
