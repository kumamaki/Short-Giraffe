import type { Semantic } from "../palette";

export interface OpencodeTheme {
	$schema: string;
	theme: Record<string, string>;
}

export function createOpencodeTheme(semantic: Semantic): OpencodeTheme {
	return {
		$schema: "https://opencode.ai/theme.json",
		theme: {
			// ── Base accent colors ──────────────────────────────────────
			primary: semantic.badgeBackground,
			secondary: semantic.textLink,
			accent: semantic.sashHover,

			// ── Status colors ───────────────────────────────────────────
			error: semantic.errorBright,
			warning: semantic.warningForeground,
			success: semantic.testingPassed,
			info: semantic.debugConsoleInfo,

			// ── Text ────────────────────────────────────────────────────
			text: semantic.foreground,
			textMuted: semantic.breadcrumbForeground,

			// ── Backgrounds ─────────────────────────────────────────────
			background: semantic.editorBackground,
			backgroundPanel: semantic.sidebarBackground,
			backgroundElement: semantic.buttonBackground,

			// ── Borders ─────────────────────────────────────────────────
			border: semantic.panelBorder,
			borderActive: semantic.focusBorder,
			borderSubtle: semantic.tabBorder,

			// ── Diff viewer ─────────────────────────────────────────────
			diffAdded: semantic.testingPassed,
			diffRemoved: semantic.errorBright,
			diffContext: semantic.editorLineNumber,
			diffHunkHeader: semantic.editorLineHighlight,
			diffHighlightAdded: semantic.testingCoveredGutter,
			diffHighlightRemoved: semantic.testingUncoveredGutter,
			diffAddedBg: semantic.diffInserted,
			diffRemovedBg: semantic.diffRemoved,
			diffContextBg: semantic.editorLineHighlight,
			diffLineNumber: semantic.editorLineNumber,
			diffAddedLineNumberBg: semantic.diffInsertedLine,
			diffRemovedLineNumberBg: semantic.diffRemovedLine,

			// ── Markdown ────────────────────────────────────────────────
			markdownText: semantic.foreground,
			markdownHeading: semantic.syntaxMarkdownTitle,
			markdownLink: semantic.syntaxMarkdownLink,
			markdownLinkText: semantic.textLink,
			markdownCode: semantic.syntaxString,
			markdownBlockQuote: semantic.textBlockQuote,
			markdownEmph: semantic.listHoverForeground,
			markdownStrong: semantic.syntaxKeyword,
			markdownHorizontalRule: semantic.editorLineNumber,
			markdownListItem: semantic.listHighlight,
			markdownListEnumeration: semantic.badgeBackground,
			markdownImage: semantic.syntaxMarkdownImage,
			markdownImageText: semantic.textLink,
			markdownCodeBlock: semantic.foreground,

			// ── Syntax highlighting ─────────────────────────────────────
			syntaxComment: semantic.syntaxComment,
			syntaxKeyword: semantic.syntaxKeyword,
			syntaxFunction: semantic.syntaxFunction,
			syntaxVariable: semantic.syntaxVariable,
			syntaxString: semantic.syntaxString,
			syntaxNumber: semantic.syntaxNumber,
			syntaxType: semantic.syntaxType,
			syntaxOperator: semantic.syntaxOperator,
			syntaxPunctuation: semantic.syntaxPunctuation,
		},
	};
}
