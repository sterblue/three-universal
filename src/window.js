/**
 * This script contains the relevant polyfills for the DOM window object.
 * It is used by the node build of three so that three.js can run on NodeJs
 */
import { JSDOM } from "jsdom";

const jsdomOptions = {
	pretendToBeVisual: true,
	storageQuota: 1e9,
	resources: "usable",
	runScripts: "dangerously"
};

const jsdom = new JSDOM(
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

export {
	window,
	Blob,
	atob,
	DOMParser,
	document,
	XMLHttpRequest,
	TextEncoder,
	TextDecoder,
	decodeURIComponent,
	CustomEvent,
	WebGLRenderingContext,
	WebGL2RenderingContext,
	innerWidth,
	innerHeight,
	DeviceOrientationEvent,
	orientation,
	addEventListener,
	removeEventListener,
	focus,
	pageXOffset,
	pageYOffset,
	FileReader,
	URL,
	ActiveXObject,
	AudioContext,
	webkitAudioContext,
	XRHand,
	HTMLImageElement,
	HTMLCanvasElement,
	ImageBitmap,
	createImageBitmap,
	self
};
