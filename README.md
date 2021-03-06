# three-universal

Versions of [Three.js](https://github.com/mrdoob/three.js) compatible with Browsers, NodeJS, React Native Threads, etc by using [JSDOM](https://github.com/jsdom/jsdom) when needed.

This package provides the original builds and examples of three.js along with NodeJS specific builds and NodeJS specific examples.

## Example



### In browsers

#### **Write a gltf file**

Let's write a textured scene to a gltf file in the browser and using NodeJS.

It's totally equivalent to using the standard "three" library.

```javascript
import { GLTFExporter } from "three-universal/examples/jsm/exporters/GLTFExporter";
import { BoxBufferGeometry, MeshBasicMaterial, Mesh, Scene, TextureLoader } from "three-universal/build/three.module";

const exporter = new GLTFExporter();
const textureLoader = new TextureLoader();
textureLoader.load( `https://url-of-my-image.jpg`, function ( texture ) {

    const scene = new Scene();
    const box = new Mesh(
        new BoxBufferGeometry(),
        new MeshBasicMaterial( { map: texture } )
    );
    box.name = "box-test";
    scene.add( box );

    exporter.parse( scene, function ( gltf ) {

        downloadJSON(gltf);

    } );

}, undefined, function ( error ) {

    throw error;

} );
```

### On NodeJS

#### **Write a gltf file**

Let's write a textured scene to a gltf file in the browser and using NodeJS.

Here we can use the `file` protocol to load a local file, and fs-extra's `writeJson` to write the scene locally. We could also use a regular link
to load a remote image.

```javascript
import { GLTFExporter } from "three-universal/examples/node-jsm/exporters/GLTFExporter";
import { BoxBufferGeometry, MeshBasicMaterial, Mesh, Scene, TextureLoader } from "three-universal/build/three.module.node";
import { writeJson } from "fs-extra";

const exporter = new GLTFExporter();
const textureLoader = new TextureLoader();
textureLoader.load( `file://path-to-my-image.jpg`, function ( texture ) {

    const scene = new Scene();
    const box = new Mesh(
        new BoxBufferGeometry(),
        new MeshBasicMaterial( { map: texture } )
    );
    box.name = "box-test";
    scene.add( box );

    exporter.parse( scene, function ( gltf ) {

        const path = `path-to-my-local-file.gltf`;
        writeJson( path, gltf, {}, function ( data ) {
            console.log("Scene written!");
        } );

    } );

}, undefined, function ( error ) {

    throw error;

} );
```

#### **Use a GLTF renderer**

Bellow is an example of how to use `headless-gl` library to leverage `WebGLRenderer` on NodeJs.

```javascript
import { getOr } from "lodash/fp";
import gl from "gl";
import {
  WebGLRenderer,
  PCFSoftShadowMap,
  WebGLRenderTarget,
  LinearFilter,
  NearestFilter,
  RGBAFormat,
  UnsignedByteType
} from "three-universal/build/three.node";

/**
 * Create a renderer
 */
export const getRenderer = ({
  height,
  width
}: {
  height: number;
  width: number;
}): WebGLRenderer => {
  // @ts-ignore
  const canvas = {
    width: width,
    height: height,
    addEventListener: event => {},
    removeEventListener: event => {},
    getContext: (contextType, attributes) => {
      return getOr(null, contextType, {
        webgl: gl(width, height, {
          ...attributes,
          preserveDrawingBuffer: true
        })
      });
    }
  } as HTMLCanvasElement;

  // Create the renderer
  const renderer = new WebGLRenderer({
    antialias: false,
    canvas: canvas,
    powerPreference: "high-performance"
  });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap; // default PCFShadowMap

  // Let's create a render target object where we'll be rendering
  const renderTarget = new WebGLRenderTarget(width, height, {
    minFilter: LinearFilter,
    magFilter: NearestFilter,
    format: RGBAFormat,
    type: UnsignedByteType
  });
  renderer.setRenderTarget(renderTarget);
  return renderer;
};
```

## Unsupported DOM interfaces

So far, JSDOM doesn't support every object of the native DOM API. If one of the utils you intend to 
run transitively uses one object in the list below, you might encounter non-three.js related issues 
**when running on NodeJS only**.

List of currently unsupported DOM objects used by Three.js: 
<!-- listDomAutoGenerated --> 
-   ActiveXObject
-   AudioContext
-   DeviceOrientationEvent
-   ImageBitmap
-   TextDecoder
-   TextEncoder
-   WebGL2RenderingContext
-   WebGLRenderingContext
-   XRHand
-   createImageBitmap
-   orientation
-   webkitAudioContext
<!-- listDomAutoGenerated -->

## Sponsors

This development is open-sourced by [Sterblue](https://www.sterblue.com/). 

Join us at [Sterblue Labs](https://labs.sterblue.com/)!

![Sterblue Labs](https://labs.sterblue.com/logos/Sterblue%20Labs-400w.png)!

## Development

When there is a new release of three at https://www.npmjs.com/package/three :

  -  Rebase the release on the fork
  - `npm install && npm run build && npm run test-e2e-node`
  - `npm publish`

## Test

Tests can be done in only one environment, NodeJS. For in-Browser tests, please refer to the original repository.
First run `npm install` in `./test` to install the required testing dependencies.

To run unit tests on NodeJS: `npm run test-unit-node`

To run end to end tests on NodeJS: `npm run test-e2e-node`
