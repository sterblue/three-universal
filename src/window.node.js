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

export const _window = jsdom.window;
