let __window;

function defineGlobals() {

	try {

		__window = window;

	} catch ( e ) { }

}

defineGlobals();

export const _window = __window;
