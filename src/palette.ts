/**
 * Short Giraffe Color Palette
 * Single source of truth for both VS Code and Zed themes
 */

// =============================================================================
// PRIMITIVES - Raw hex colors organized by purpose
// =============================================================================

export const primitives = {
	// -------------------------------------------------------------------------
	// Background scale (darkest to lightest)
	// -------------------------------------------------------------------------
	gray950: "#0C0E13", // Zed: surface, title bar, elevated surfaces
	gray925: "#0d1016", // Zed: panel background
	gray900: "#0F131A", // VS Code: activity bar
	gray875: "#101521", // Widget borders
	gray850: "#13161D", // Zed: background, tab inactive
	gray825: "#141821", // Zed: editor, status bar, tab bar
	gray800: "#141A25", // VS Code: dropdown, input backgrounds
	gray775: "#141925", // Widget shadow
	gray750: "#151b25", // VS Code: sidebar, title bar
	gray725: "#191F2B", // VS Code: main editor background
	gray700: "#191e2a", // VS Code: terminal black, borders
	gray675: "#1B1F28", // Zed: border, element, active line
	gray650: "#1d2431", // VS Code: list focus/hover
	gray625: "#1d2433", // Notifications
	gray600: "#222630", // Zed: highlighted line, element hover
	gray575: "#222833", // VS Code: selection, tab active, quick input
	gray550: "#232834", // VS Code: widgets, peek views
	gray525: "#262f3e", // VS Code: inactive selection
	gray500: "#2a3546", // VS Code: selection background (with alpha)
	gray475: "#2E3543", // VS Code: suggest widget
	gray450: "#303743", // VS Code: panel border
	gray425: "#313e52", // Selection highlight border
	gray400: "#333842", // Zed: line numbers, invisible chars
	gray375: "#373D4A", // Zed: document highlight
	gray350: "#373e4c", // VS Code: dropdown border
	gray325: "#404651", // Panel title border
	gray300: "#414B5D", // VS Code: buttons, comments, line numbers
	gray275: "#505867", // VS Code: focus border
	gray250: "#535A69", // Zed: ignored, hint, disabled text
	gray225: "#586070", // VS Code: placeholder text
	gray200: "#5c6773", // Code lens
	gray175: "#707a8c", // VS Code: inactive tabs, muted text
	gray150: "#7581A0", // Punctuation
	gray125: "#7E8694", // Markdown punctuation
	gray100: "#A3A5AA", // VS Code: dropdown text, line numbers active
	gray75: "#a6a7ab", // Zed: text muted, placeholder, predictive
	gray50: "#CAD0DC", // VS Code: icons, secondary text
	gray25: "#cbccc6", // VS Code: panel titles, terminal foreground

	// -------------------------------------------------------------------------
	// Primary accent (coral/orange spectrum)
	// -------------------------------------------------------------------------
	accent: "#F29E74", // Primary accent (cursor, badges, status bar)
	accentLight: "#FFB69E", // Light accent (sidebar titles, borders)
	accentMuted: "#E1936C", // Muted accent (hover, warnings)
	accentDark: "#C98B83", // Dark accent (gutter modified)

	// -------------------------------------------------------------------------
	// Syntax colors
	// -------------------------------------------------------------------------
	cyan: "#45CAC2", // Functions, links, directives
	yellow: "#F5DA7A", // Keywords, booleans, constants
	yellowBright: "#FFE074", // Operators, JSON keys, CSS colors
	yellowTag: "#FFCC6A", // HTML/XML tags, markdown links
	pink: "#F6ABA8", // Strings (VS Code wins - was #E4A2AC in Zed)
	pinkMuted: "#E4A2AC", // Zed: strings, text.literal, deleted
	blue: "#BBD2EE", // Variables
	blueLight: "#9BC9FF", // Parameters, imports, class names
	blueSky: "#9be7ff", // Types
	blueLink: "#4582CA", // Active links
	blueEmbed: "#8BB8F9", // Zed: embedded
	blueInfo: "#6dcbfa", // Terminal blue, info validation
	blueGit: "#A2C4EB", // Git decorations
	blueMod: "#77a8d9", // Modified indicator
	purple: "#BAB4FF", // Vue props, custom components
	purpleType: "#CBBEE7", // Interfaces, classes (semantic)
	purpleZedType: "#CBBDE7", // Zed: types
	purpleTag: "#BCBCEF", // Zed: tags
	purpleQuote: "#DA95EF", // Markdown quotes
	purpleSubmodule: "#d4bfffb3", // Git submodule (with alpha)
	orange: "#FFB46A", // List hover, built-in objects
	orangeNum: "#F7C0A5", // Numbers
	orangeCSS: "#FFB480", // CSS constants, enum semantic
	orangeEnum: "#E6BB8D", // Zed: enum
	cream: "#FCFCCE", // Object keys, properties
	creamDark: "#E9DEB7", // Zed: properties

	// -------------------------------------------------------------------------
	// Text colors
	// -------------------------------------------------------------------------
	textPrimary: "#F7F7E5", // VS Code: editor foreground
	textPrimaryAlt: "#FEF8F5", // VS Code: UI foreground
	textZedPrimary: "#EDEFF4", // Zed: text, editor foreground
	textSecondary: "#cbccc6", // VS Code: panel titles
	textLight: "#e4f3fa", // List inactive selection
	textYellow: "#ffeb95cc", // Git conflict (with alpha)

	// -------------------------------------------------------------------------
	// Status colors
	// -------------------------------------------------------------------------
	error: "#FF7474", // Error foreground, suggest highlight
	errorDark: "#B35C51", // Error foreground muted
	errorBg: "#8C404A", // Zed: error background/border
	errorBright: "#ff3333", // Validation error border
	errorDiff: "#FF747410", // Diff removed (with alpha)
	errorGutter: "#f2798399", // Gutter deleted (with alpha)
	errorTerminal: "#ed8274", // Terminal red
	errorTerminalBright: "#f28779", // Terminal bright red

	warningYellow: "#ffd580", // Warning, terminal bright yellow
	warningBg: "#8C8340", // Zed: warning background/border
	warningTerminal: "#fad07b", // Terminal yellow

	success: "#a6cc70", // Terminal green, gutter added
	successBright: "#bae67e", // Terminal bright green
	successDiff: "#82F28710", // Diff inserted (with alpha)
	successHighlight: "#82F28735", // Suggest selected (with alpha)
	successZed: "#a1c181ff", // Zed: player green

	infoCyan: "#5ccfe6", // Info validation
	infoBright: "#73d0ff", // Terminal bright blue

	// -------------------------------------------------------------------------
	// Terminal ANSI colors
	// -------------------------------------------------------------------------
	terminalMagenta: "#cfbafa",
	terminalMagentaBright: "#d4bfff",
	terminalCyan: "#90e1c6",
	terminalCyanBright: "#95e6cb",
	terminalWhite: "#c7c7c7",
	terminalWhiteBright: "#ffffff",
	terminalBlackBright: "#686868",

	// -------------------------------------------------------------------------
	// Zed collaborative players
	// -------------------------------------------------------------------------
	playerBlue: "#74ade8ff",
	playerRed: "#be5046ff",
	playerOrange: "#bf956aff",
	playerPurple: "#b477cfff",
	playerCyan: "#6eb4bfff",
	playerPink: "#d07277ff",
	playerYellow: "#dec184ff",
	playerGreen: "#a1c181ff",

	// -------------------------------------------------------------------------
	// Special / transparency
	// -------------------------------------------------------------------------
	transparent: "#FFFFFF00",
	black10: "#00000010",
	black20: "#00000020",
	black30: "#00000030",
	black40: "#00000040",
	black50: "#00000050",
	hintBg: "#40578C",
} as const;

// =============================================================================
// SEMANTIC - Purpose-driven aliases for palette usage
// =============================================================================

export const semantic = {
	// -------------------------------------------------------------------------
	// Editor backgrounds
	// -------------------------------------------------------------------------
	vscodeEditorBg: primitives.gray725, // #191F2B
	zedEditorBg: primitives.gray825, // #141821 (Zed prefers darker)

	// -------------------------------------------------------------------------
	// Syntax highlighting (shared)
	// -------------------------------------------------------------------------
	syntaxFunction: primitives.cyan,
	syntaxKeyword: primitives.yellow,
	syntaxKeywordOperator: primitives.yellowBright,
	syntaxVariable: primitives.blue,
	syntaxParameter: primitives.blueLight,
	syntaxString: primitives.pink, // VS Code wins (#F6ABA8)
	syntaxNumber: primitives.orangeNum,
	syntaxComment: primitives.gray300,
	syntaxType: primitives.blueSky,
	syntaxClass: primitives.purpleType,
	syntaxProperty: primitives.cream,
	syntaxTag: primitives.yellowTag,
	syntaxAttribute: primitives.cyan,
	syntaxPunctuation: primitives.gray150,

	// -------------------------------------------------------------------------
	// UI accent
	// -------------------------------------------------------------------------
	accent: primitives.accent,
	accentLight: primitives.accentLight,
} as const;
