(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jsdom')) :
	typeof define === 'function' && define.amd ? define(['exports', 'jsdom'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.THREE = {}, global.jsdom$1));
}(this, (function (exports, jsdom$1) { 'use strict';

	/**
	 * This script contains the relevant polyfills for the DOM window object.
	 * It is used by the node build of three so that three.js can run on NodeJs
	 */

	const jsdomOptions = {
		pretendToBeVisual: true,
		storageQuota: 1e9,
		resources: "usable",
		runScripts: "dangerously"
	};

	const jsdom = new jsdom$1.JSDOM(
		`<!DOCTYPE html><body id="main"><p >Hello world</p></body>`,
		jsdomOptions
	);

	const window = jsdom.window;
	const Blob = window.Blob;
	const atob = window.atob;
	const DOMParser = window.DOMParser;
	const document = window.document;
	const XMLHttpRequest = window.XMLHttpRequest;
	const TextEncoder = window.TextEncoder;
	const TextDecoder = window.TextDecoder;
	const decodeURIComponent = window.decodeURIComponent;
	const CustomEvent = window.CustomEvent;
	const WebGLRenderingContext = window.WebGLRenderingContext;
	const WebGL2RenderingContext = window.WebGL2RenderingContext;
	const innerWidth = window.innerWidth;
	const innerHeight = window.innerHeight;
	const DeviceOrientationEvent = window.DeviceOrientationEvent;
	const orientation = window.orientation;
	const addEventListener = window.addEventListener;
	const removeEventListener = window.removeEventListener;
	const focus = window.focus;
	const pageXOffset = window.pageXOffset;
	const pageYOffset = window.pageYOffset;
	const FileReader = window.FileReader;
	const URL = window.URL;
	const ActiveXObject = window.ActiveXObject;
	const AudioContext = window.AudioContext;
	const webkitAudioContext = window.webkitAudioContext;
	const XRHand = window.XRHand;
	const HTMLImageElement = window.HTMLImageElement;
	const HTMLCanvasElement = window.HTMLCanvasElement;
	const ImageBitmap = window.ImageBitmap;
	const createImageBitmap = window.createImageBitmap;
	const self = window.self;

	exports.ActiveXObject = ActiveXObject;
	exports.AudioContext = AudioContext;
	exports.Blob = Blob;
	exports.CustomEvent = CustomEvent;
	exports.DOMParser = DOMParser;
	exports.DeviceOrientationEvent = DeviceOrientationEvent;
	exports.FileReader = FileReader;
	exports.HTMLCanvasElement = HTMLCanvasElement;
	exports.HTMLImageElement = HTMLImageElement;
	exports.ImageBitmap = ImageBitmap;
	exports.TextDecoder = TextDecoder;
	exports.TextEncoder = TextEncoder;
	exports.URL = URL;
	exports.WebGL2RenderingContext = WebGL2RenderingContext;
	exports.WebGLRenderingContext = WebGLRenderingContext;
	exports.XMLHttpRequest = XMLHttpRequest;
	exports.XRHand = XRHand;
	exports.addEventListener = addEventListener;
	exports.atob = atob;
	exports.createImageBitmap = createImageBitmap;
	exports.decodeURIComponent = decodeURIComponent;
	exports.document = document;
	exports.focus = focus;
	exports.innerHeight = innerHeight;
	exports.innerWidth = innerWidth;
	exports.orientation = orientation;
	exports.pageXOffset = pageXOffset;
	exports.pageYOffset = pageYOffset;
	exports.removeEventListener = removeEventListener;
	exports.self = self;
	exports.webkitAudioContext = webkitAudioContext;
	exports.window = window;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
