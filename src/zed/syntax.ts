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
	boolean: toZedStyle(semantic.zedSyntaxBoolean, tokens.boolean.fontStyle, 400),
	constant: toZedStyle(semantic.zedSyntaxConstant, "italic", 300),
	constructor: {},
	embedded: toZedStyle(semantic.zedSyntaxEmbedded),
	emphasis: {},
	"emphasis.strong": { font_weight: 700 },
	enum: toZedStyle(semantic.zedSyntaxEnum),
	function: toZedStyle(semantic.zedSyntaxFunction),
	hint: toZedStyle(semantic.zedSyntaxHint),
	keyword: toZedStyle(semantic.zedSyntaxKeyword, tokens.keyword.fontStyle),
	label: toZedStyle(semantic.zedSyntaxLabel),
	link_text: {},
	link_uri: {},
	number: toZedStyle(semantic.zedSyntaxNumber, undefined, 400),
	operator: toZedStyle(semantic.zedSyntaxOperator, undefined, 400),
	predictive: {},
	preproc: {},
	primary: {},
	property: toZedStyle(semantic.zedSyntaxProperty),
	punctuation: toZedStyle(semantic.zedSyntaxPunctuation),
	"punctuation.bracket": toZedStyle(semantic.zedSyntaxPunctuationBracket),
	"punctuation.delimiter": toZedStyle(semantic.zedSyntaxPunctuationBracket),
	"punctuation.list_marker": toZedStyle(semantic.zedSyntaxPunctuationBracket),
	"punctuation.special": toZedStyle(semantic.zedSyntaxPunctuationBracket),
	string: toZedStyle(semantic.zedSyntaxString),
	"string.escape": {},
	"string.regex": {},
	"string.special": {},
	"string.special.symbol": {},
	tag: toZedStyle(semantic.zedSyntaxTag),
	"text.literal": toZedStyle(semantic.zedSyntaxTextLiteral),
	title: {},
	type: toZedStyle(semantic.zedSyntaxType),
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
	variant: {},
	comment: toZedStyle(semantic.zedSyntaxComment),
};
