$JSM.module('org.tuman.jsm.test.module1', function(require, module, exports) {



'use strict';

console.log('---- init 1');

var module2 = require('org.tuman.jsm.test.module2');



exports.func1 = function() {
	console.log('---------- 1.1');
	module2.func();
}

exports.func2 = function() {
	console.log('---------- 1.2');
}



console.log('---- init 1 DONE');



});
