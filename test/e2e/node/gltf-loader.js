import { GLTFLoader } from "../../../examples/node/loaders/GLTFLoader";

export default function main() {

	const loader = new GLTFLoader();
	// Load a glTF resource
	loader.load(
	// resource URL
		`file://${__dirname}/../../data/scene-loader.gltf`,
		// called when the resource is loaded
		function ( gltf ) {

			const scene = gltf.scene;
			if ( ! scene.children[ 0 ].name === "box-test" ) {

				console.log( `TEST e2e GLTFLoader - FAILED!` );
				throw new Error();

			} else {

				console.log( `TEST e2e GLTFLoader - PASSED!` );

			}


		},
		// called while loading is progressing
		function ( xhr ) {

			console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

		},
		// called when loading has errors
		function ( error ) {

			console.log( `TEST e2e GLTFLoader - FAILED!` );
			throw error;

		}
	);

}
