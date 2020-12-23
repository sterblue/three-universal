import inject from '@rollup/plugin-inject';
import * as Window from '../../src/window.js';
import path from "path";

try {

	require( 'qunit' );

} catch {

	console.log( '\x1b[31mError! You not installed dependencies. Please run `npm i --prefix test`\x1b[37m' );
	process.exit( 1 );

}

const namesGlobal = Object.keys( Window ).toString().split( "," );


const configInject = namesGlobal.reduce(
	( currentConfig, name ) => {

		currentConfig[ name ] = [ path.resolve( '../src/window.js' ), name ];
		return currentConfig;

	}, {
		window: [ path.resolve( '../src/window.js' ), "*" ]
	}
);


function glsl() {

	return {

		transform( code, id ) {

			if ( /\.glsl$/.test( id ) === false ) return;

			var transformedCode = 'export default ' + JSON.stringify(
				code
					.replace( /[ \t]*\/\/.*\n/g, '' )
					.replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' )
					.replace( /\n{2,}/g, '\n' )
			) + ';';
			return {
				code: transformedCode,
				map: { mappings: '' }
			};

		}

	};

}

export default [
	// editor unit conf
	{
		input: 'unit/three.editor.unit.js',
		plugins: [
			glsl()
		],
		// sourceMap: true,
		output: [
			{
				format: 'umd',
				name: 'THREE',
				file: 'unit/build/three.editor.unit.js',
				intro: 'QUnit.module( "Editor", () => {',
				outro: '} );',
				indent: '\t',
			}
		]
	},
	// example unit conf
	{
		input: 'unit/three.example.unit.js',
		plugins: [
			glsl()
		],
		// sourceMap: true,
		output: [
			{
				format: 'umd',
				name: 'THREE',
				file: 'unit/build/three.example.unit.js',
				intro: 'QUnit.module( "Example", () => {',
				outro: '} );',
				indent: '\t',
			}
		]
	},
	// source unit conf
	{
		input: 'unit/three.source.unit.js',
		plugins: [
			glsl()
		],
		// sourceMap: true,
		output: [
			{
				format: 'umd',
				name: 'THREE',
				file: 'unit/build/three.source.unit.js',
				intro: 'QUnit.module( "Source", () => {',
				outro: '} );',
				indent: '\t',
			}
		]
	},
	// node source unit conf
	{
		input: 'unit/three.source.node.unit.js',
		plugins: [
			inject( configInject ),
			glsl()
		],
		// sourceMap: true,
		output: [
			{
				format: 'umd',
				name: 'THREE',
				file: 'unit/build/three.source.unit.node.js',
				intro: 'QUnit.module( "Source", () => {',
				outro: '} );',
				indent: '\t',
			}
		]
	},
];
