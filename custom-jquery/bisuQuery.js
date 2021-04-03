/* eslint-disable */

const $ = (...args) => {

	if(typeof args[0] === 'function') {
		// document ready fn
		const readyFn = args[0]
		document.addEventListener('DOMContentLoaded', readyFn)
	} else if(typeof args[0] === 'string') {
		// Element is a selector
		const selector = args[0]
		const collection =  document.querySelectorAll(selector)

		collection.css = (...cssArgs) => {

			if(typeof cssArgs[0] === 'string') {
				const [property, value] = cssArgs

				collection.forEach((element, i) => {
					element.style[property] = value
				});

			}else if(typeof cssArgs[0] === 'object') {

					const cssProps = Object.entries(cssArgs[0])

					collection.forEach(element => {
						cssProps.forEach(([property, value]) => {
								element.style[property] = value
							});

					})


					};

			}

			return collection


	}
	}
