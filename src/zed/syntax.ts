/**
 * Zed Syntax Colors
 * Syntax highlighting for Zed editor
 */

import { semantic } from "../palette";
import { tokens } from "../tokens";
import type { ZedSyntaxStyle } from "../types";

// Helper to convert fontStyle to Zed format
function toZedStyle(
	color: string,
	fontStyle?: string,
	fontWeight?: number
): ZedSyntaxStyle {
	const style: ZedSyntaxStyle = { color };
	if (fontStyle !== undefined) {
		style.font_style = fontStyle === "normal" ? null : fontStyle;
	}
	if (fontWeight !== undefined) {
		style.font_weight = fontWeight;
	}
	return style;
}

export const zedSyntax: Record<string, ZedSyntaxStyle> = {
	// -------------------------------------------------------------------------
	// Core syntax
	// -------------------------------------------------------------------------
	boolean: toZedStyle(semantic.zedSyntaxBoolean, tokens.boolean.fontStyle, 400),
	constant: toZedStyle(semantic.zedSyntaxConstant, "italic", 300),
	constructor: toZedStyle(semantic.zedSyntaxConstructor),
	embedded: toZedStyle(semantic.zedSyntaxEmbedded),
	enum: toZedStyle(semantic.zedSyntaxEnum),
	function: toZedStyle(semantic.zedSyntaxFunction),
	hint: toZedStyle(semantic.zedSyntaxHint),
	keyword: toZedStyle(semantic.zedSyntaxKeyword, tokens.keyword.fontStyle),
	label: toZedStyle(semantic.zedSyntaxLabel),
	number: toZedStyle(semantic.zedSyntaxNumber, undefined, 400),
	operator: toZedStyle(semantic.zedSyntaxOperator, undefined, 400),
	property: toZedStyle(semantic.zedSyntaxProperty),
	type: toZedStyle(semantic.zedSyntaxType),
	comment: toZedStyle(semantic.zedSyntaxComment),

	// -------------------------------------------------------------------------
	// Variables
	// -------------------------------------------------------------------------
	variable: {
		color: semantic.zedSyntaxVariable,
		font_style: null,
		font_weight: null,
	},
	"variable.special": {
		color: semantic.zedSyntaxVariableSpecial,
		font_style: null,
		font_weight: null,
	},
	variant: toZedStyle(semantic.zedSyntaxVariant),

	// -------------------------------------------------------------------------
	// Strings
	// -------------------------------------------------------------------------
	string: toZedStyle(semantic.zedSyntaxString),
	"string.escape": toZedStyle(semantic.zedSyntaxStringEscape),
	"string.regex": toZedStyle(semantic.zedSyntaxStringRegex),
	"string.special": toZedStyle(semantic.zedSyntaxStringSpecial),
	"string.special.symbol": toZedStyle(semantic.zedSyntaxStringSymbol),

	// -------------------------------------------------------------------------
	// Punctuation
	// -------------------------------------------------------------------------
	punctuation: toZedStyle(semantic.zedSyntaxPunctuation),
	"punctuation.bracket": toZedStyle(semantic.zedSyntaxPunctuationBracket),
	"punctuation.delimiter": toZedStyle(semantic.zedSyntaxPunctuationBracket),
	"punctuation.list_marker": toZedStyle(semantic.zedSyntaxPunctuationBracket),
	"punctuation.special": toZedStyle(semantic.zedSyntaxPunctuationBracket),

	// -------------------------------------------------------------------------
	// Tags & markup
	// -------------------------------------------------------------------------
	tag: toZedStyle(semantic.zedSyntaxTag),
	"text.literal": toZedStyle(semantic.zedSyntaxTextLiteral),
	title: toZedStyle(semantic.zedSyntaxTitle),
	link_text: toZedStyle(semantic.zedSyntaxLinkText),
	link_uri: toZedStyle(semantic.zedSyntaxLinkUri),
	emphasis: { font_style: "italic" },
	"emphasis.strong": { font_weight: 700 },

	// -------------------------------------------------------------------------
	// Preprocessor & meta
	// -------------------------------------------------------------------------
	preproc: toZedStyle(semantic.zedSyntaxPreproc),
	primary: toZedStyle(semantic.zedSyntaxPrimary),
	predictive: toZedStyle(semantic.zedSyntaxPredictive),
};
