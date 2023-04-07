// From Obsidian Type Definitions:
// Version 1.1.1
//
//     function fish(selector: string): HTMLElement | null;
//     function fishAll(selector: string): HTMLElement[];
//
import type EnvironmentOptions from '#options';

export default function createExtension(globalThis: typeof global, options: EnvironmentOptions) {
	const global = function(){} as unknown as {new():any};
	global.prototype = globalThis;

	return class extends global {
		static fish(selector: string): HTMLElement | null {
			return globalThis.document.querySelector(selector);
		}

		static fishAll(selector: string): HTMLElement[] {
			return Array.from(globalThis.document.querySelectorAll(selector));
		}
	};
}
