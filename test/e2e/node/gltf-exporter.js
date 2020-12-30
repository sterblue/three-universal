import { GLTFExporter } from "../../../examples/node-jsm/exporters/GLTFExporter";
import { BoxBufferGeometry, MeshBasicMaterial, Mesh, Scene, TextureLoader } from "../../../build/three.module.node";
import { writeJson } from "fs-extra";

export default function main() {

	const exporter = new GLTFExporter();
	const textureLoader = new TextureLoader();
	textureLoader.load( `file://${__dirname}/../../data/image.jpg`, function ( texture ) {

		const scene = new Scene();
		const box = new Mesh(
			new BoxBufferGeometry(),
			new MeshBasicMaterial( { map: texture } )
		);
		box.name = "box-test";
		scene.add( box );

		exporter.parse( scene, function ( gltf ) {

			const path = `${__dirname}/outputs/scene-exporter.gltf`;
			writeJson( path, gltf, {}, function ( data ) {

				console.log( `TEST e2e GLTFExporter - PASSED!` );

			} );

		} );

	}, undefined, function ( error ) {

		console.error( `TEST e2e GLTFExporter - FAILED!` );
		throw error;

	} );


}
