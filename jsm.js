var $JSM = null;



'use strict';



(function() {



var MODULES = {};

function registerModule(id, options) {
	if (!id) throw new Error('Module id is required');
	if (!options) throw new Error('Module options is required');

	var module = { id: id };
	
	var optionsType = typeof options;
	if (optionsType == 'function') {
		module.init = options;
	} else if (optionsType == 'object') {
		module.init = options.init;
		module.content = options.content;
	} else {
		throw new Error('Invalid module options');
	}

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

	var content = module.content;
	if (content) {
		return content;
	}

	var content = {};

	var init = module.init;
	if (init) {
		var newContent = init.call(content);
		if (newContent) {
			content = newContent;
		}
	}

	module.content = content;

	return content;
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
