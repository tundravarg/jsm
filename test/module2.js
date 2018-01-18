$JSM.module('org.tuman.jsm.test.module2', function(require, module, exports) {



'use strict';

console.log('---- init 2');



exports.func = function() {
	console.log('---------- 2');
	var module1 = require('org.tuman.jsm.test.module1');
	module1.func2();
}



console.log('---- init 2 DONE');



});
