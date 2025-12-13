/**
 * Shared syntax token definitions
 * Used by both VS Code and Zed theme generators
 */

import { primitives, semantic } from "./palette";

// Shared token styles - the "what" without the "how to apply"
export const tokens = {
	function: {
		color: semantic.syntaxFunction,
	},
	keyword: {
		color: semantic.syntaxKeyword,
		fontStyle: "italic" as const,
	},
	keywordOperator: {
		color: semantic.syntaxKeywordOperator,
		fontStyle: "normal" as const,
	},
	variable: {
		color: semantic.syntaxVariable,
		fontStyle: "normal" as const,
	},
	parameter: {
		color: semantic.syntaxParameter,
		fontStyle: "italic" as const,
	},
	string: {
		color: semantic.syntaxString,
	},
	number: {
		color: semantic.syntaxNumber,
	},
	comment: {
		color: semantic.syntaxComment,
	},
	type: {
		color: semantic.syntaxType,
	},
	class: {
		color: semantic.syntaxParameter,
		fontStyle: "bold" as const,
	},
	property: {
		color: semantic.syntaxProperty,
	},
	tag: {
		color: semantic.syntaxTag,
	},
	attribute: {
		color: semantic.syntaxAttribute,
	},
	punctuation: {
		color: semantic.syntaxPunctuation,
	},
	boolean: {
		color: semantic.syntaxKeyword,
		fontStyle: "italic" as const,
	},
	builtinObject: {
		color: primitives.orange,
		fontStyle: "bold" as const,
	},
	super: {
		color: semantic.syntaxFunction,
		fontStyle: "bold" as const,
	},
	customComponent: {
		color: primitives.purple,
	},
	vueProp: {
		color: primitives.purple,
	},
	interface: {
		color: primitives.purpleType,
	},
	enum: {
		color: primitives.orangeCSS,
	},
	enumMember: {
		color: primitives.pink,
	},
} as const;
