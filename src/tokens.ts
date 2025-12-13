/**
 * Shared syntax token definitions
 * Used by both VS Code and Zed theme generators
 */

import type { Semantic } from "./palette";

// Shared token styles - the "what" without the "how to apply"
export function createTokens(semantic: Semantic) {
	return {
	function: {
		color: semantic.syntaxFunction,
	},
	keyword: {
		color: semantic.syntaxKeyword,
		fontStyle: "italic" as const,
	},
	keywordOperator: {
		color: semantic.syntaxOperator,
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
		color: semantic.syntaxClass,
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
		color: semantic.syntaxBuiltinObject,
		fontStyle: "bold" as const,
	},
	super: {
		color: semantic.syntaxSuper,
		fontStyle: "bold" as const,
	},
	customComponent: {
		color: semantic.syntaxComponent,
	},
	vueProp: {
		color: semantic.syntaxVueProp,
	},
	interface: {
		color: semantic.semanticInterface,
	},
	enum: {
		color: semantic.semanticEnum,
	},
	enumMember: {
		color: semantic.semanticEnumMember,
	},
	} as const;
}

export type Tokens = ReturnType<typeof createTokens>;
