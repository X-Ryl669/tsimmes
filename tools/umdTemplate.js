{
	let tsimmes_PLACEHODER
	
	if (typeof define == 'function' && define.amd) {
		define([], () => $);
	} else if (typeof module == 'object' && module.exports) {
		module.exports = $;
	} else {
		this.$ = $;
	}
};
