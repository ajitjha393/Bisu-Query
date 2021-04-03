/* eslint-disable */

const $ = (...args) => {

	if(typeof args[0] === 'function') {
		// document ready fn
		const readyFn = args[0]
		document.addEventListener('DOMContentLoaded', readyFn)
	} else if(typeof args[0] === 'string') {
		// Element is a selector
		const selector = args[0]
		return document.querySelectorAll(selector)
	}

}
