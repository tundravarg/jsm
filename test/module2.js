$JSM.module('org.tuman.jsm.test.module2', function() {



'use strict';

console.log('---- init 2');



this.func = function() {
	console.log('---------- 2');
	var module1 = $JSM.require('org.tuman.jsm.test.module1');
	module1.func2();
}



console.log('---- init 2 DONE');



});
