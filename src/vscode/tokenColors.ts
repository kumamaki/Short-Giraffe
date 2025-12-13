/**
 * VS Code Token Colors
 * TextMate scope rules for syntax highlighting
 */

import { primitives } from "../palette";
import { tokens } from "../tokens";
import type { VSCodeTokenColor } from "../types";

export const vscodeTokenColors: VSCodeTokenColor[] = [
	{
		name: "Punctuation",
		scope: ["punctuation", "meta.brace"],
		settings: {
			foreground: tokens.punctuation.color,
		},
	},
	{
		name: "Keywords and Built-ins",
		scope: [
			"meta.class storage.type",
			"storage.modifier",
			"storage.type.type",
			"support.type.primitive",
			"new.expr entity.name.function",
			"meta.var.expr storage",
			"variable.language.this",
			"keyword",
			"meta.function storage.type.function",
			"constant.language.boolean",
			"constant.language.null",
			"storage.type.primitive",
			"support.type.object.module",
		],
		settings: {
			foreground: tokens.keyword.color,
			fontStyle: tokens.keyword.fontStyle,
		},
	},
	{
		name: "Built-in objects",
		scope: ["support.class.builtin"],
		settings: {
			foreground: tokens.builtinObject.color,
			fontStyle: tokens.builtinObject.fontStyle,
		},
	},
	{
		name: "Keywords and Build-ins :: override",
		scope: ["keyword.operator"],
		settings: {
			foreground: tokens.keywordOperator.color,
			fontStyle: tokens.keywordOperator.fontStyle,
		},
	},
	{
		name: "Types",
		scope: ["entity.name.type"],
		settings: {
			foreground: tokens.type.color,
		},
	},
	{
		name: "Functions",
		scope: ["entity.name.function"],
		settings: {
			foreground: tokens.function.color,
		},
	},
	{
		name: "Variables",
		scope: ["variable"],
		settings: {
			foreground: tokens.variable.color,
			fontStyle: tokens.variable.fontStyle,
		},
	},
	{
		name: "Variables :: props",
		scope: ["variable.parameter"],
		settings: {
			foreground: tokens.parameter.color,
			fontStyle: tokens.parameter.fontStyle,
		},
	},
	{
		name: "Class",
		scope: [
			"meta.class support.class",
			"meta.class entity.name.type.class",
			"entity.other.inherited-class",
		],
		settings: {
			foreground: tokens.class.color,
			fontStyle: tokens.class.fontStyle,
		},
	},
	{
		name: "Class :: super",
		scope: ["variable.language.super"],
		settings: {
			foreground: tokens.super.color,
			fontStyle: tokens.super.fontStyle,
		},
	},
	{
		name: "Objects/Keys",
		scope: ["meta.object-literal.key"],
		settings: {
			foreground: tokens.property.color,
		},
	},
	{
		name: "Objects/Methods",
		scope: [
			"meta.object.member function",
			"meta.object.member meta.function-call",
			"meta.brace.round meta.object.member",
		],
		settings: {
			foreground: tokens.function.color,
		},
	},
	{
		name: "Objects/Properties",
		scope: ["meta.object.member variable"],
		settings: {
			foreground: tokens.property.color,
		},
	},
	{
		name: "Strings",
		scope: ["string"],
		settings: {
			foreground: tokens.string.color,
		},
	},
	{
		name: "Numbers",
		scope: ["constant.numeric"],
		settings: {
			foreground: tokens.number.color,
		},
	},
	{
		name: "Imports",
		scope: ["meta.import variable.other.readwrite"],
		settings: {
			foreground: tokens.parameter.color,
		},
	},
	{
		name: "Comments",
		scope: ["comment"],
		settings: {
			foreground: tokens.comment.color,
		},
	},
	{
		name: "[Vue] Prop type override",
		scope: ["source.vue support.class"],
		settings: {
			foreground: tokens.vueProp.color,
		},
	},
	{
		name: "[XML] Tags",
		scope: ["entity.name.tag", "meta.tag", "entity.name.tag.pug"],
		settings: {
			foreground: tokens.tag.color,
		},
	},
	{
		name: "[XML] Tags :: strings",
		scope: ["text.html.derivative", "meta.jsx.children"],
		settings: {
			foreground: primitives.textPrimary,
		},
	},
	{
		name: "[XML] Tags :: directives",
		scope: ["entity.other.attribute-name", "meta.directive"],
		settings: {
			foreground: tokens.attribute.color,
		},
	},
	{
		name: "[XML] Tags :: custom components",
		scope: ["meta.tag.other entity.name.tag", "support.class.component"],
		settings: {
			foreground: tokens.customComponent.color,
		},
	},
	{
		name: "[XML] Tags :: variables",
		scope: ["meta.tag variable"],
		settings: {
			foreground: tokens.parameter.color,
		},
	},
	{
		name: "[CSS] Selectors",
		scope: [
			"source.css entity.other.attribute-name.class",
			"source.postcss entity.other.attribute-name.class",
			"source.scss entity.other.attribute-name.class",
			"source.less entity.other.attribute-name.class",
			"source.css meta.property-list",
			"source.postcss meta.property-list",
			"source.scss meta.property-list",
			"source.less meta.property-list",
		],
		settings: {},
	},
	{
		name: "[CSS] Property",
		scope: [
			"source.css meta.property-list",
			"source.postcss meta.property-list",
			"source.scss meta.property-list",
			"source.less meta.property-list",
		],
		settings: {
			foreground: primitives.textPrimary.toLowerCase(),
		},
	},
	{
		name: "[CSS] Punctuations",
		scope: [
			"source.css punctuation.function",
			"source.postcss punctuation.function",
			"source.scss punctuation.function",
			"source.less punctuation.function",
		],
		settings: {
			fontStyle: "normal",
			foreground: primitives.textPrimaryAlt.toLowerCase(),
		},
	},
	{
		name: "[CSS] Variable",
		scope: [
			"source.css variable",
			"source.postcss variable",
			"source.scss variable",
			"source.less variable",
			"source.css punctuation.definition.variable",
			"source.postcss punctuation.definition.variable",
			"source.scss punctuation.definition.variable",
			"source.less punctuation.definition.variable",
		],
		settings: {
			foreground: tokens.parameter.color,
		},
	},
	{
		name: "[CSS] Function",
		scope: [
			"source.css meta.function.misc.css",
			"source.postcss meta.function.misc.css",
			"source.scss meta.function.misc.css",
			"source.less meta.function.misc.css",
		],
		settings: {
			foreground: tokens.function.color,
			fontStyle: "bold",
		},
	},
	{
		name: "[CSS] Constants",
		scope: [
			"source.css support.constant",
			"source.postcss support.constant",
			"source.scss support.constant",
			"source.less support.constant",
			"source.css constant.numeric",
			"source.postcss constant.numeric",
			"source.scss constant.numeric",
			"source.less constant.numeric",
		],
		settings: {
			foreground: primitives.orangeCSS,
		},
	},
	{
		name: "[CSS] Constants :: Colors",
		scope: ["constant.other", "support.constant.color"],
		settings: {
			foreground: tokens.keywordOperator.color,
			fontStyle: "italic",
		},
	},
	{
		name: "[JSON] Key",
		scope: ["meta.structure.dictionary support.type.property-name"],
		settings: {
			foreground: tokens.keywordOperator.color,
		},
	},
	{
		name: "[JSON] Value",
		scope: ["meta.structure.dictionary.value", "string.quoted.double.json"],
		settings: {
			foreground: tokens.string.color,
		},
	},
	{
		name: "[JSON] Keyword Value",
		scope: ["meta.structure.dictionary.value constant.language"],
		settings: {
			fontStyle: "italic",
		},
	},
	{
		name: "[Markdown] Title",
		scope: ["markup.heading"],
		settings: {
			foreground: tokens.string.color,
		},
	},
	{
		name: "[Markdown] Punctuation",
		scope: ["markup.heading.setext"],
		settings: {
			foreground: primitives.gray125,
		},
	},
	{
		name: "[Markdown] Quote",
		scope: ["markup.quote"],
		settings: {
			foreground: primitives.purpleQuote,
		},
	},
	{
		name: "[Markdown] Quote",
		scope: ["meta.image.inline"],
		settings: {
			foreground: tokens.keywordOperator.color,
		},
	},
	{
		name: "[Markdown] Link",
		scope: ["meta.link.inline"],
		settings: {
			foreground: tokens.tag.color,
		},
	},
	{
		name: "[Markdown] Bold",
		scope: ["markup.bold"],
		settings: {
			fontStyle: "bold",
		},
	},
	{
		name: "[Markdown] Italic",
		scope: ["markup.italic.markdown"],
		settings: {
			fontStyle: "italic",
		},
	},
];
