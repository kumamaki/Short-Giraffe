/**
 * Theme Variant System
 * Allows generating multiple theme variations from a single source
 */

import { semantic as baseSemantic, type Semantic } from "../palette";
import { darker } from "./darker";
import { highContrast } from "./high-contrast";

export type Variant = {
	id: string;
	name: string;
	overrides: Partial<Semantic>;
};

// Registry of all variants
// The base variant (id: '') generates the default theme files
export const variants: Variant[] = [
	{ id: "", name: "Short Giraffe", overrides: {} },
	darker,
	highContrast,
];

// Merge base semantic with variant overrides
export function mergeVariant(variant: Variant): Semantic {
	return { ...baseSemantic, ...variant.overrides } as Semantic;
}

// Get file suffix for variant (empty for base)
export function getFileSuffix(variant: Variant): string {
	return variant.id ? `-${variant.id}` : "";
}
