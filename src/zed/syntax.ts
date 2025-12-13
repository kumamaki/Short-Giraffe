/**
 * Zed Syntax Colors
 * Syntax highlighting for Zed editor
 */

import { primitives } from "../palette";
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
	boolean: toZedStyle(tokens.boolean.color, tokens.boolean.fontStyle, 400),
	constant: toZedStyle(tokens.keyword.color, "italic", 300),
	constructor: {},
	embedded: toZedStyle(primitives.blueEmbed),
	emphasis: {},
	"emphasis.strong": { font_weight: 700 },
	enum: toZedStyle(primitives.orangeEnum),
	function: toZedStyle(tokens.function.color),
	hint: toZedStyle(primitives.gray400),
	keyword: toZedStyle(tokens.keyword.color, tokens.keyword.fontStyle),
	label: toZedStyle(primitives.gray400),
	link_text: {},
	link_uri: {},
	number: toZedStyle(tokens.keyword.color, undefined, 400),
	operator: toZedStyle(tokens.keyword.color, undefined, 400),
	predictive: {},
	preproc: {},
	primary: {},
	property: toZedStyle(primitives.creamDark),
	punctuation: toZedStyle(primitives.gray400),
	"punctuation.bracket": toZedStyle(primitives.gray75),
	"punctuation.delimiter": toZedStyle(primitives.gray75),
	"punctuation.list_marker": toZedStyle(primitives.gray75),
	"punctuation.special": toZedStyle(primitives.gray75),
	string: toZedStyle(tokens.string.color), // Unified to VS Code value (#F6ABA8)
	"string.escape": {},
	"string.regex": {},
	"string.special": {},
	"string.special.symbol": {},
	tag: toZedStyle(primitives.purpleTag),
	"text.literal": toZedStyle(tokens.string.color), // Unified to VS Code value
	title: {},
	type: toZedStyle(primitives.purpleZedType),
	variable: {
		color: tokens.variable.color,
		font_style: null,
		font_weight: null,
	},
	"variable.special": {
		color: "#BBCFEC",
		font_style: null,
		font_weight: null,
	},
	variant: {},
	comment: toZedStyle(primitives.gray250),
};
