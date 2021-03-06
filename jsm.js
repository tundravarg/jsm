//---------------------------------
// JSM - JavaScript [Simple] Module
//---------------------------------
// Autor: Sergei Tumanov
//---------------------------------



////---- How to use it: -----------------------------------------
////-------------------------------------------------------------
//$JSM.module('your.module.name', function(require, module, exports) {
//
//'use strict';
//
//const external_module = require('some.external.module');
//
//var symbolForExport = '';
//exports.symbolForExport = symbolForExport;
//
//});
////-------------------------------------------------------------



var $JSM = null;



'use strict';



(function() {



var MODULES = {};

function registerModule(id, closure) {
	if (!id) throw new Error('Module id is required');
	if (!closure) throw new Error('Module closure is required');

	var module = {
		id: id,
		closure: closure,
		exports: {},
		loaded: false
	};

	MODULES[id] = module;
}

function requireModule(id, optional) {
	var module = MODULES[id];
	if (!isNotNull(module)) {
		if (optional) {
			return module;
		} else {
			throw new Error('Module "' + id + '" is not registered');
		}
	}

	if (!module.loaded) {

		function Module() {}
		Object.defineProperty(Module.prototype, 'id', {
			get: function() { return module.id; }
		});
		Object.defineProperty(Module.prototype, 'exports', {
			get: function() { return module.exports; },
			set: function(exports) { module.exports = exports; },
		});

		var moduleProxy = new Module();

		module.closure.call([][0], requireModule, moduleProxy, moduleProxy.exports);
		module.loaded = true;
	}

	return module.exports;
}



function isNotNull(obj) {
	return obj != null && typeof obj != 'undefined';
}



function JSM() {
	this.test = "asdasd";
}

$JSM = new JSM();

Object.defineProperty(JSM.prototype, 'module', {
	get: function() {
		return registerModule;
	}
});

Object.defineProperty(JSM.prototype, 'require', {
	get: function() {
		return requireModule;
	}
});



})();
