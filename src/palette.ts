/**
 * Short Giraffe Color Palette
 * Single source of truth for both VS Code and Zed themes
 *
 * Structure:
 * - `colors`: Raw hex values organized by hue + shade scale
 * - `semantic`: Purpose-driven names for ALL usages
 */

// =============================================================================
// COLORS - Raw hex values organized by hue with shade scale
// =============================================================================

export const colors = {
	// -------------------------------------------------------------------------
	// Grays (darkest 950 → lightest 25)
	// -------------------------------------------------------------------------
	gray950: "#0C0E13",
	gray925: "#0d1016",
	gray900: "#0F131A",
	gray875: "#101521",
	gray850: "#13161D",
	gray825: "#141821",
	gray800: "#141A25",
	gray775: "#141925",
	gray750: "#151b25",
	gray725: "#191F2B",
	gray700: "#191e2a",
	gray675: "#1B1F28",
	gray650: "#1d2431",
	gray625: "#1d2433",
	gray600: "#222630",
	gray575: "#222833",
	gray550: "#232834",
	gray525: "#262f3e",
	gray500: "#2a3546",
	gray475: "#2E3543",
	gray450: "#303743",
	gray425: "#313e52",
	gray400: "#333842",
	gray375: "#373D4A",
	gray350: "#373e4c",
	gray325: "#404651",
	gray300: "#414B5D",
	gray275: "#505867",
	gray250: "#535A69",
	gray225: "#586070",
	gray200: "#5c6773",
	gray175: "#707a8c",
	gray150: "#7581A0",
	gray125: "#7E8694",
	gray100: "#A3A5AA",
	gray75: "#a6a7ab",
	gray50: "#CAD0DC",
	gray25: "#cbccc6",

	// -------------------------------------------------------------------------
	// Oranges (primary accent hue)
	// -------------------------------------------------------------------------
	orange700: "#C98B83",
	orange600: "#E1936C",
	orange500: "#F29E74",
	orange400: "#FFB69E",
	orange300: "#FFB46A",
	orange200: "#F7C0A5",
	orange100: "#FFB480",

	// -------------------------------------------------------------------------
	// Yellows
	// -------------------------------------------------------------------------
	yellow600: "#fad07b",
	yellow500: "#F5DA7A",
	yellow400: "#FFE074",
	yellow300: "#FFCC6A",
	yellow200: "#ffd580",
	yellow100: "#ffeb95cc",

	// -------------------------------------------------------------------------
	// Pinks
	// -------------------------------------------------------------------------
	pink500: "#F6ABA8",
	pink400: "#E4A2AC",
	pink300: "#d07277ff",

	// -------------------------------------------------------------------------
	// Blues
	// -------------------------------------------------------------------------
	blue800: "#40578C",
	blue700: "#4582CA",
	blue600: "#77a8d9",
	blue500: "#BBD2EE",
	blue450: "#BBCFEC",
	blue400: "#9BC9FF",
	blue350: "#A2C4EB",
	blue300: "#9be7ff",
	blue250: "#8BB8F9",
	blue200: "#6dcbfa",
	blue150: "#73d0ff",
	blue100: "#74ade8ff",

	// -------------------------------------------------------------------------
	// Cyans
	// -------------------------------------------------------------------------
	cyan500: "#45CAC2",
	cyan400: "#5ccfe6",
	cyan350: "#6eb4bfff",
	cyan300: "#90e1c6",
	cyan200: "#95e6cb",

	// -------------------------------------------------------------------------
	// Purples
	// -------------------------------------------------------------------------
	purple600: "#b477cfff",
	purple500: "#BAB4FF",
	purple450: "#BCBCEF",
	purple400: "#CBBEE7",
	purple350: "#CBBDE7",
	purple300: "#DA95EF",
	purple200: "#cfbafa",
	purple150: "#d4bfff",
	purple100: "#d4bfffb3",

	// -------------------------------------------------------------------------
	// Creams / Whites
	// -------------------------------------------------------------------------
	cream500: "#FCFCCE",
	cream400: "#E9DEB7",
	cream300: "#F7F7E5",
	cream200: "#FEF8F5",
	cream150: "#EDEFF4",
	cream100: "#e4f3fa",
	white: "#ffffff",
	whiteAlt: "#c7c7c7",

	// -------------------------------------------------------------------------
	// Greens
	// -------------------------------------------------------------------------
	green600: "#82F28710",
	green550: "#82F28735",
	green500: "#a6cc70",
	green450: "#a1c181ff",
	green400: "#bae67e",

	// -------------------------------------------------------------------------
	// Reds
	// -------------------------------------------------------------------------
	red800: "#8C404A",
	red700: "#be5046ff",
	red600: "#B35C51",
	red500: "#FF7474",
	red450: "#FF747410",
	red400: "#ed8274",
	red350: "#f28779",
	red300: "#f2798399",
	red200: "#ff3333",

	// -------------------------------------------------------------------------
	// Olive / Warning backgrounds
	// -------------------------------------------------------------------------
	olive500: "#8C8340",
	olive400: "#bf956aff",
	olive300: "#dec184ff",

	// -------------------------------------------------------------------------
	// Special
	// -------------------------------------------------------------------------
	transparent: "#FFFFFF00",
	black: "#000000",
	black10: "#00000010",
	black20: "#00000020",
	black30: "#00000030",
	black40: "#00000040",
	black50: "#00000050",

	// -------------------------------------------------------------------------
	// Terminal blacks
	// -------------------------------------------------------------------------
	terminalBlackBright: "#686868",
} as const;

// =============================================================================
// SEMANTIC - Purpose-driven names for ALL usages
// =============================================================================

export const semantic = {
	// =========================================================================
	// EDITOR
	// =========================================================================
	editorBackground: colors.gray725,
	editorForeground: colors.cream300,
	editorLineHighlight: colors.gray575,
	editorSelection: colors.gray500,
	editorSelectionInactive: colors.gray525,
	editorSelectionHighlight: colors.gray575,
	editorSelectionHighlightBorder: colors.gray425,
	editorWordHighlight: colors.gray525,
	editorCursor: colors.orange500,
	editorLineNumber: colors.gray300,
	editorLineNumberActive: colors.gray100,
	editorWhitespace: `${colors.gray175}66`,
	editorIndentGuide: colors.gray575,
	editorIndentGuideActive: `${colors.gray175}b3`,
	editorRuler: colors.gray575,
	editorCodeLens: colors.gray200,
	editorBracketMatch: colors.gray575,
	editorBracketMatchBorder: `${colors.gray175}99`,
	editorRangeHighlight: colors.gray700,
	editorInlayHint: `${colors.blue300}BB`,
	editorInlayHintBg: colors.transparent,
	editorLink: colors.cyan500,
	editorFindMatch: `${colors.orange500}0d`,
	editorFindMatchBorder: colors.orange500,
	editorFindMatchHighlight: `${colors.orange500}0d`,
	editorFindMatchHighlightBorder: `${colors.orange500}59`,
	editorFindRange: colors.gray525,
	editorWordHighlightStrong: `${colors.orange500}33`,

	// =========================================================================
	// EDITOR WIDGETS
	// =========================================================================
	widgetBackground: colors.gray550,
	widgetShadow: colors.gray775,
	widgetBorder: colors.gray875,
	suggestWidgetBackground: colors.gray475,
	suggestWidgetBorder: colors.gray875,
	suggestWidgetHighlight: colors.red500,
	suggestWidgetSelected: colors.green550,

	// =========================================================================
	// EDITOR GUTTER
	// =========================================================================
	gutterBackground: colors.gray725,
	gutterModified: colors.orange700,
	gutterAdded: `${colors.green500}99`,
	gutterDeleted: colors.red300,

	// =========================================================================
	// EDITOR OVERVIEW RULER
	// =========================================================================
	overviewRulerBorder: colors.gray700,
	overviewRulerModified: `${colors.blue600}99`,
	overviewRulerAdded: `${colors.green500}99`,
	overviewRulerDeleted: colors.red300,
	overviewRulerError: colors.red200,
	overviewRulerWarning: colors.orange500,

	// =========================================================================
	// DIFF EDITOR
	// =========================================================================
	diffInserted: colors.green600,
	diffRemoved: colors.red450,

	// =========================================================================
	// SIDEBAR & ACTIVITY BAR
	// =========================================================================
	sidebarBackground: colors.gray750,
	sidebarForeground: colors.gray50,
	sidebarBorder: colors.gray900,
	sidebarTitle: colors.orange400,
	sidebarSectionHeader: colors.orange400,
	activityBarBackground: colors.gray900,
	activityBarForeground: colors.orange500,
	activityBarBorder: colors.gray900,
	activityBarInactive: colors.gray300,
	activityBarBadge: colors.orange500,
	activityBarBadgeForeground: colors.gray725,

	// =========================================================================
	// TABS
	// =========================================================================
	tabActiveBackground: colors.gray575,
	tabActiveForeground: colors.orange500,
	tabActiveBorderTop: colors.orange500,
	tabInactiveBackground: colors.gray725,
	tabInactiveForeground: colors.gray175,
	tabBorder: colors.gray725,
	tabUnfocusedActiveBorderTop: colors.cream200,
	tabGroupBorder: colors.gray900,
	tabGroupEmpty: colors.gray650,
	tabGroupHeaderBorder: colors.gray700,
	tabGroupDrop: `${colors.gray900}20`,

	// =========================================================================
	// STATUS BAR
	// =========================================================================
	statusBarBackground: colors.orange400,
	statusBarForeground: colors.gray800,
	statusBarBorder: colors.gray700,
	statusBarDebuggingBackground: colors.orange500,
	statusBarDebuggingForeground: colors.gray725,
	statusBarNoFolder: colors.gray550,
	statusBarItemActive: colors.black50,
	statusBarItemHover: colors.orange600,
	statusBarItemProminent: colors.orange500,
	statusBarItemProminentHover: colors.black30,

	// =========================================================================
	// TITLE BAR
	// =========================================================================
	titleBarActive: colors.gray750,
	titleBarActiveForeground: colors.gray25,
	titleBarInactive: colors.gray725,
	titleBarInactiveForeground: colors.gray175,
	titleBarBorder: colors.gray700,

	// =========================================================================
	// BUTTONS & INPUTS
	// =========================================================================
	buttonBackground: colors.gray400,
	buttonBorder: colors.gray400,
	buttonForeground: colors.cream200,
	buttonHover: colors.gray350,
	buttonSecondary: colors.gray475,
	buttonSecondaryForeground: colors.gray50,
	checkboxBackground: colors.gray725,
	checkboxForeground: colors.cream200,
	inputBackground: colors.gray800,
	inputBorder: colors.gray300,
	inputForeground: colors.gray100,
	inputPlaceholder: colors.gray225,
	inputOptionActive: colors.orange500,
	inputValidationError: colors.gray725,
	inputValidationErrorBorder: colors.red200,
	inputValidationInfo: colors.gray725,
	inputValidationInfoBorder: colors.cyan400,
	inputValidationWarning: colors.gray725,
	inputValidationWarningBorder: colors.yellow200,
	dropdownBackground: colors.gray800,
	dropdownForeground: colors.gray100,
	dropdownBorder: colors.gray350,

	// =========================================================================
	// LISTS
	// =========================================================================
	listActiveSelection: colors.gray575,
	listActiveSelectionForeground: colors.cream300,
	listFocusBackground: colors.gray650,
	listFocusForeground: colors.orange500,
	listHighlight: colors.orange500,
	listHoverBackground: colors.gray650,
	listHoverForeground: colors.orange300,
	listInactiveSelection: colors.gray650,
	listInactiveSelectionForeground: colors.cream100,
	listInvalidItem: colors.gray225,

	// =========================================================================
	// SCROLLBAR
	// =========================================================================
	scrollbarShadow: colors.gray575,
	scrollbarSlider: colors.black20,
	scrollbarSliderHover: colors.black30,
	scrollbarSliderActive: colors.black40,

	// =========================================================================
	// MINIMAP
	// =========================================================================
	minimapSlider: colors.black30,
	minimapSliderHover: colors.black40,
	minimapSliderActive: colors.black50,

	// =========================================================================
	// BADGES
	// =========================================================================
	badgeBackground: colors.orange500,
	badgeForeground: colors.gray725,
	progressBar: colors.orange500,

	// =========================================================================
	// PANELS
	// =========================================================================
	panelBackground: colors.gray725,
	panelBorder: colors.gray450,
	panelTitleActive: colors.gray25,
	panelTitleActiveBorder: colors.gray325,
	panelTitleInactive: colors.gray175,

	// =========================================================================
	// NOTIFICATIONS
	// =========================================================================
	notificationBackground: colors.gray625,

	// =========================================================================
	// PEEK VIEW
	// =========================================================================
	peekViewBorder: colors.gray700,
	peekViewBackground: colors.gray550,
	peekViewMatchHighlight: `${colors.orange500}33`,
	peekViewResult: colors.gray550,
	peekViewResultFile: colors.gray175,
	peekViewTitle: colors.gray550,
	peekViewTitleDescription: colors.gray175,
	peekViewTitleLabel: colors.gray175,

	// =========================================================================
	// DEBUG
	// =========================================================================
	debugToolbar: colors.gray550,
	debugExceptionBorder: colors.gray700,
	debugExceptionBackground: colors.gray550,

	// =========================================================================
	// EXTENSIONS
	// =========================================================================
	extensionButtonForeground: colors.gray725,
	extensionButtonBackground: colors.orange400,
	extensionButtonHover: colors.orange300,
	extensionButtonSeparator: colors.gray600,

	// =========================================================================
	// QUICK INPUT
	// =========================================================================
	quickInputBackground: colors.gray575,
	quickInputFocusBackground: colors.gray575,
	quickInputFocusForeground: colors.orange600,
	quickInputFocusIcon: colors.cyan500,
	pickerGroupBorder: colors.gray100,
	pickerGroupForeground: colors.gray100,

	// =========================================================================
	// SETTINGS
	// =========================================================================
	settingsHeader: colors.gray25,
	settingsModified: colors.blue600,

	// =========================================================================
	// TEXT
	// =========================================================================
	textBlockQuote: colors.gray550,
	textLink: colors.cyan500,
	textLinkActive: colors.blue700,
	textPreformat: colors.blue350,
	foreground: colors.cream200,
	focusBorder: colors.gray275,
	sashHover: colors.orange500,
	iconForeground: colors.gray50,
	selectionBackground: `${colors.gray500}fd`,

	// =========================================================================
	// ERRORS & STATUS
	// =========================================================================
	errorForeground: colors.red600,
	errorBright: colors.red500,
	warningForeground: colors.orange600,
	infoForeground: colors.gray300,

	// =========================================================================
	// GIT DECORATIONS
	// =========================================================================
	gitModified: colors.blue350,
	gitAdded: colors.blue350,
	gitStageModified: colors.blue350,
	gitDeleted: colors.pink500,
	gitUntracked: colors.cyan500,
	gitIgnored: colors.gray100,
	gitConflict: colors.yellow100,
	gitSubmodule: colors.purple100,

	// =========================================================================
	// TERMINAL
	// =========================================================================
	terminalBackground: colors.gray725,
	terminalForeground: colors.gray25,
	terminalBlack: colors.gray700,
	terminalRed: colors.red400,
	terminalGreen: colors.green500,
	terminalYellow: colors.yellow600,
	terminalBlue: colors.blue200,
	terminalMagenta: colors.purple200,
	terminalCyan: colors.cyan300,
	terminalWhite: colors.whiteAlt,
	terminalBrightBlack: colors.terminalBlackBright,
	terminalBrightRed: colors.red350,
	terminalBrightGreen: colors.green400,
	terminalBrightYellow: colors.yellow200,
	terminalBrightBlue: colors.blue150,
	terminalBrightMagenta: colors.purple150,
	terminalBrightCyan: colors.cyan200,
	terminalBrightWhite: colors.white,

	// =========================================================================
	// SYNTAX HIGHLIGHTING
	// =========================================================================
	syntaxPunctuation: colors.gray150,
	syntaxKeyword: colors.yellow500,
	syntaxKeywordItalic: colors.yellow500,
	syntaxOperator: colors.yellow400,
	syntaxBuiltinObject: colors.orange300,
	syntaxType: colors.blue300,
	syntaxFunction: colors.cyan500,
	syntaxVariable: colors.blue500,
	syntaxParameter: colors.blue400,
	syntaxClass: colors.blue400,
	syntaxSuper: colors.cyan500,
	syntaxProperty: colors.cream500,
	syntaxString: colors.pink500,
	syntaxNumber: colors.orange200,
	syntaxComment: colors.gray300,
	syntaxVueProp: colors.purple500,
	syntaxTag: colors.yellow300,
	syntaxTagText: colors.cream300,
	syntaxAttribute: colors.cyan500,
	syntaxComponent: colors.purple500,
	syntaxTagVariable: colors.blue400,
	syntaxCSSProperty: colors.cream300,
	syntaxCSSPunctuation: colors.cream200,
	syntaxCSSVariable: colors.blue400,
	syntaxCSSFunction: colors.cyan500,
	syntaxCSSConstant: colors.orange100,
	syntaxCSSColor: colors.yellow400,
	syntaxJSONKey: colors.yellow400,
	syntaxJSONString: colors.pink500,
	syntaxMarkdownTitle: colors.pink500,
	syntaxMarkdownPunctuation: colors.gray125,
	syntaxMarkdownQuote: colors.purple300,
	syntaxMarkdownImage: colors.yellow400,
	syntaxMarkdownLink: colors.yellow300,

	// =========================================================================
	// SEMANTIC TOKENS
	// =========================================================================
	semanticProperty: colors.cream500,
	semanticVariable: colors.blue500,
	semanticFunction: colors.cyan500,
	semanticTypeParameter: colors.purple500,
	semanticType: colors.blue300,
	semanticInterface: colors.purple400,
	semanticClass: colors.purple400,
	semanticTypeDeclaration: colors.blue300,
	semanticEnum: colors.orange100,
	semanticEnumMember: colors.pink500,

	// =========================================================================
	// ZED-SPECIFIC
	// =========================================================================
	zedBackground: colors.gray750,
	zedSurface: colors.gray900,
	zedBorder: colors.gray675,
	zedBorderFocused: colors.orange400,
	zedPanel: colors.gray750,
	zedStatusBar: colors.gray750,
	zedText: colors.cream150,
	zedTextMuted: colors.gray75,
	zedTextDisabled: colors.gray250,
	zedTextAccent: colors.orange400,
	zedEditorBackground: colors.gray725,
	zedEditorForeground: colors.cream150,
	zedEditorLineNumber: colors.gray400,
	zedEditorIndentGuide: `${colors.white}10`,
	zedEditorActiveLine: colors.gray675,
	zedEditorHighlightedLine: colors.gray600,
	zedEditorGutter: colors.gray725,
	zedElevatedSurface: colors.gray900,
	zedElement: colors.gray675,
	zedElementHover: colors.gray600,
	zedGhostElementHover: colors.gray675,
	zedTabActive: colors.gray675,
	zedTabInactive: colors.gray800,
	zedTabBar: colors.gray750,
	zedTitleBar: colors.gray750,
	zedToolbar: colors.gray750,
	zedPredictive: colors.gray75,
	zedCreated: colors.cyan500,
	zedDeleted: colors.pink500,
	zedConflict: colors.pink500,
	zedIgnored: colors.gray250,
	zedModified: colors.orange400,
	zedWarningBg: colors.olive500,
	zedErrorBg: colors.red800,
	zedHint: colors.gray250,
	zedHintBg: colors.blue800,
	zedDocHighlight: colors.gray375,

	// =========================================================================
	// ZED SYNTAX
	// =========================================================================
	zedSyntaxBoolean: colors.yellow500,
	zedSyntaxConstant: colors.yellow500,
	zedSyntaxEmbedded: colors.blue250,
	zedSyntaxEnum: colors.orange100,
	zedSyntaxFunction: colors.cyan500,
	zedSyntaxHint: colors.gray400,
	zedSyntaxKeyword: colors.yellow500,
	zedSyntaxLabel: colors.gray400,
	zedSyntaxNumber: colors.orange200,
	zedSyntaxOperator: colors.yellow400,
	zedSyntaxProperty: colors.cream500,
	zedSyntaxPunctuation: colors.gray150,
	zedSyntaxPunctuationBracket: colors.gray75,
	zedSyntaxString: colors.pink500,
	zedSyntaxTag: colors.yellow300,
	zedSyntaxTextLiteral: colors.pink500,
	zedSyntaxType: colors.blue300,
	zedSyntaxVariable: colors.blue500,
	zedSyntaxVariableSpecial: colors.blue450,
	zedSyntaxComment: colors.gray300,

	// =========================================================================
	// ZED PLAYERS (collaborative cursors)
	// =========================================================================
	playerBlue: colors.blue100,
	playerRed: colors.red700,
	playerOrange: colors.olive400,
	playerPurple: colors.purple600,
	playerCyan: colors.cyan350,
	playerPink: colors.pink300,
	playerYellow: colors.olive300,
	playerGreen: colors.green450,

	// =========================================================================
	// STICKY SCROLL (VS Code)
	// =========================================================================
	stickyScrollBackground: colors.gray725,
	stickyScrollBorder: colors.gray700,
	stickyScrollShadow: colors.gray775,
	stickyScrollGutter: colors.gray725,
	stickyScrollHover: colors.gray650,

	// =========================================================================
	// GHOST TEXT / COPILOT (VS Code)
	// =========================================================================
	ghostTextForeground: colors.gray75,
	ghostTextBackground: colors.transparent,
	ghostTextBorder: colors.transparent,

	// =========================================================================
	// INLINE CHAT & AI FEATURES (VS Code)
	// =========================================================================
	inlineChatBackground: colors.gray550,
	inlineChatBorder: colors.gray700,
	inlineChatShadow: colors.gray775,
	inlineChatRegionHighlight: `${colors.orange500}15`,
	inlineChatSendButtonBackground: colors.orange500,
	inlineChatSendButtonForeground: colors.gray725,
	inlineChatSendButtonHover: colors.orange600,
	inlineChatRequestBorder: colors.gray700,
	inlineEditGutterPrimaryBorder: colors.orange500,
	inlineEditGutterPrimaryForeground: colors.orange500,
	inlineEditGutterPrimaryBackground: `${colors.orange500}20`,
	inlineEditGutterSecondaryBorder: colors.gray300,
	inlineEditGutterSecondaryForeground: colors.gray300,
	inlineEditGutterSecondaryBackground: `${colors.gray300}20`,
	inlineEditGutterSuccessBorder: colors.green500,
	inlineEditGutterSuccessForeground: colors.green500,
	inlineEditGutterSuccessBackground: `${colors.green500}20`,
	inlineEditGutterBackground: colors.gray725,
	inlineEditOriginalChangedLine: `${colors.red500}15`,
	inlineEditOriginalChangedText: `${colors.red500}30`,
	inlineEditModifiedChangedLine: `${colors.green500}15`,
	inlineEditModifiedChangedText: `${colors.green500}30`,
	inlineEditOriginalBorder: colors.red500,
	inlineEditModifiedBorder: colors.green500,

	// =========================================================================
	// COMMAND CENTER (VS Code)
	// =========================================================================
	commandCenterBackground: colors.gray575,
	commandCenterForeground: colors.cream200,
	commandCenterBorder: colors.gray700,
	commandCenterInactiveForeground: colors.gray175,
	commandCenterInactiveBorder: colors.gray700,
	commandCenterActiveForeground: colors.orange500,
	commandCenterActiveBorder: colors.orange500,

	// =========================================================================
	// BREADCRUMBS (VS Code)
	// =========================================================================
	breadcrumbForeground: colors.gray175,
	breadcrumbBackground: colors.gray725,
	breadcrumbFocusForeground: colors.orange500,
	breadcrumbActiveSelection: colors.cream200,
	breadcrumbPickerBackground: colors.gray575,

	// =========================================================================
	// MENU BAR (VS Code)
	// =========================================================================
	menuBackground: colors.gray575,
	menuForeground: colors.cream200,
	menuBorder: colors.gray700,
	menuSelectionBackground: colors.gray650,
	menuSelectionForeground: colors.orange500,
	menuSelectionBorder: colors.transparent,
	menuSeparator: colors.gray450,
	menubarSelectionBackground: colors.gray650,
	menubarSelectionForeground: colors.orange500,
	menubarSelectionBorder: colors.transparent,

	// =========================================================================
	// TESTING (VS Code)
	// =========================================================================
	testingPassed: colors.green500,
	testingFailed: colors.red500,
	testingSkipped: colors.yellow500,
	testingErrored: colors.gray300,
	testingQueued: colors.gray175,
	testingUnset: colors.gray175,
	testingCoveredBackground: `${colors.green500}20`,
	testingUncoveredBackground: `${colors.red500}20`,
	testingCoveredGutter: colors.green500,
	testingUncoveredGutter: colors.red500,
	testingRunAction: colors.green500,
	testingPeekBorder: colors.orange500,
	testingPeekHeaderBackground: colors.gray550,
	testingMessageError: colors.red500,
	testingMessageErrorBackground: `${colors.red500}15`,
	testingMessageInfo: colors.cyan500,
	testingMessageInfoBackground: `${colors.cyan500}15`,

	// =========================================================================
	// MERGE CONFLICTS (VS Code)
	// =========================================================================
	mergeCurrentHeader: `${colors.cyan500}40`,
	mergeCurrentContent: `${colors.cyan500}20`,
	mergeIncomingHeader: `${colors.purple400}40`,
	mergeIncomingContent: `${colors.purple400}20`,
	mergeCommonHeader: `${colors.gray300}40`,
	mergeCommonContent: `${colors.gray300}20`,
	mergeBorder: colors.gray700,
	mergeEditorChangeBackground: `${colors.orange500}20`,
	mergeEditorChangeWordBackground: `${colors.orange500}40`,
	mergeEditorConflictFocusedBorder: colors.orange500,
	mergeEditorConflictUnfocusedBorder: colors.gray300,

	// =========================================================================
	// NOTIFICATIONS EXTENDED (VS Code)
	// =========================================================================
	notificationCenterBorder: colors.gray700,
	notificationHeaderForeground: colors.cream200,
	notificationHeaderBackground: colors.gray550,
	notificationToastBorder: colors.gray700,
	notificationForeground: colors.cream200,
	notificationBorder: colors.gray700,
	notificationErrorIcon: colors.red500,
	notificationWarningIcon: colors.orange500,
	notificationInfoIcon: colors.cyan500,
	notificationLinkForeground: colors.cyan500,

	// =========================================================================
	// BRACKET COLORIZATION (VS Code)
	// =========================================================================
	bracketColor1: colors.orange500,
	bracketColor2: colors.yellow500,
	bracketColor3: colors.cyan500,
	bracketColor4: colors.purple400,
	bracketColor5: colors.blue400,
	bracketColor6: colors.green500,
	bracketUnexpected: colors.red500,
	bracketGuideActive1: `${colors.orange500}80`,
	bracketGuideActive2: `${colors.yellow500}80`,
	bracketGuideActive3: `${colors.cyan500}80`,
	bracketGuideActive4: `${colors.purple400}80`,
	bracketGuideActive5: `${colors.blue400}80`,
	bracketGuideActive6: `${colors.green500}80`,
	bracketGuideInactive1: `${colors.orange500}40`,
	bracketGuideInactive2: `${colors.yellow500}40`,
	bracketGuideInactive3: `${colors.cyan500}40`,
	bracketGuideInactive4: `${colors.purple400}40`,
	bracketGuideInactive5: `${colors.blue400}40`,
	bracketGuideInactive6: `${colors.green500}40`,

	// =========================================================================
	// DEBUG TOKENS (VS Code)
	// =========================================================================
	debugTokenName: colors.cyan500,
	debugTokenValue: colors.cream300,
	debugTokenString: colors.pink500,
	debugTokenBoolean: colors.yellow500,
	debugTokenNumber: colors.orange200,
	debugTokenError: colors.red500,
	debugValueChanged: colors.orange500,
	debugExceptionLabelForeground: colors.cream200,
	debugExceptionLabelBackground: colors.red800,
	debugStateLabelForeground: colors.cream200,
	debugStateLabelBackground: colors.gray550,
	debugBreakpointIcon: colors.red500,
	debugBreakpointDisabled: colors.gray300,
	debugBreakpointUnverified: colors.gray175,
	debugStartIcon: colors.green500,
	debugPauseIcon: colors.yellow500,
	debugStopIcon: colors.red500,
	debugDisconnectIcon: colors.red500,
	debugRestartIcon: colors.green500,
	debugStepIcon: colors.cyan500,
	debugContinueIcon: colors.green500,
	debugConsoleInfo: colors.cyan500,
	debugConsoleWarning: colors.orange500,
	debugConsoleError: colors.red500,
	debugConsoleSource: colors.gray175,
	debugConsoleInputIcon: colors.orange500,

	// =========================================================================
	// TERMINAL DECORATIONS (VS Code)
	// =========================================================================
	terminalDecorationDefault: colors.gray300,
	terminalDecorationSuccess: `${colors.green500}30`,
	terminalDecorationError: `${colors.red500}30`,
	terminalTabActiveBorder: colors.orange500,
	terminalStickyScrollBackground: colors.gray725,
	terminalStickyScrollBorder: colors.gray700,
	terminalStickyScrollHover: colors.gray650,
	terminalFindMatch: `${colors.orange500}30`,
	terminalFindMatchBorder: colors.orange500,
	terminalFindMatchHighlight: `${colors.orange500}20`,
	terminalFindMatchHighlightBorder: `${colors.orange500}50`,
	terminalOverviewCursor: colors.gray100,
	terminalOverviewFindMatch: colors.orange500,

	// =========================================================================
	// NOTEBOOK (VS Code)
	// =========================================================================
	notebookCellBackground: colors.gray725,
	notebookCellBorder: colors.gray700,
	notebookCellStatusBarHover: colors.gray650,
	notebookCellToolbarSeparator: colors.gray450,
	notebookFocusedCellBorder: colors.orange500,
	notebookFocusedEditorBorder: colors.orange500,
	notebookSelectedCellBackground: colors.gray650,
	notebookSelectedCellBorder: colors.gray575,
	notebookInactiveFocusedCellBorder: colors.gray450,
	notebookOutputBackground: colors.gray775,
	notebookOutputBorder: colors.gray700,
	notebookScrollbarSlider: colors.black30,
	notebookScrollbarSliderHover: colors.black40,
	notebookScrollbarSliderActive: colors.black50,
	notebookRunningIcon: colors.orange500,
	notebookSuccessIcon: colors.green500,
	notebookErrorIcon: colors.red500,
	notebookEditorBackground: colors.gray725,

	// =========================================================================
	// RADIO & CHECKBOX (VS Code)
	// =========================================================================
	radioActiveBackground: colors.orange500,
	radioActiveBorder: colors.orange500,
	radioActiveForeground: colors.gray725,
	radioInactiveBackground: colors.gray725,
	radioInactiveBorder: colors.gray300,
	radioInactiveForeground: colors.cream200,
	radioInactiveHoverBackground: colors.gray650,
	checkboxBorder: colors.gray300,
	checkboxSelectBackground: colors.orange500,
	checkboxSelectBorder: colors.orange500,

	// =========================================================================
	// GIT DECORATION EXTENSIONS (VS Code)
	// =========================================================================
	gitRenamed: colors.cyan400,
	gitCopied: colors.green400,

	// =========================================================================
	// KEYBINDING LABELS (VS Code)
	// =========================================================================
	keybindingBackground: colors.gray575,
	keybindingForeground: colors.cream200,
	keybindingBorder: colors.gray450,
	keybindingBottomBorder: colors.gray400,

	// =========================================================================
	// BANNER (VS Code)
	// =========================================================================
	bannerBackground: colors.gray550,
	bannerForeground: colors.cream200,
	bannerIconForeground: colors.orange500,

	// =========================================================================
	// WELCOME PAGE (VS Code)
	// =========================================================================
	welcomePageBackground: colors.gray725,
	welcomePageTileBackground: colors.gray650,
	welcomePageTileHoverBackground: colors.gray575,
	welcomePageTileBorder: colors.gray700,
	welcomePageProgressBackground: colors.gray700,
	welcomePageProgressForeground: colors.orange500,

	// =========================================================================
	// WALKTHROUGH (VS Code)
	// =========================================================================
	walkthroughStepTitle: colors.orange500,

	// =========================================================================
	// SEARCH EDITOR (VS Code)
	// =========================================================================
	searchEditorFindMatch: `${colors.orange500}30`,
	searchEditorFindMatchBorder: colors.orange500,
	searchEditorTextInputBorder: colors.gray300,

	// =========================================================================
	// SYMBOL ICONS (VS Code)
	// =========================================================================
	symbolIconArray: colors.orange500,
	symbolIconBoolean: colors.yellow500,
	symbolIconClass: colors.purple400,
	symbolIconColor: colors.orange500,
	symbolIconConstant: colors.yellow500,
	symbolIconConstructor: colors.cyan500,
	symbolIconEnumerator: colors.orange100,
	symbolIconEnumeratorMember: colors.pink500,
	symbolIconEvent: colors.orange500,
	symbolIconField: colors.blue400,
	symbolIconFile: colors.gray175,
	symbolIconFolder: colors.gray175,
	symbolIconFunction: colors.cyan500,
	symbolIconInterface: colors.purple400,
	symbolIconKey: colors.yellow500,
	symbolIconKeyword: colors.yellow500,
	symbolIconMethod: colors.cyan500,
	symbolIconModule: colors.gray175,
	symbolIconNamespace: colors.purple400,
	symbolIconNull: colors.gray175,
	symbolIconNumber: colors.orange200,
	symbolIconObject: colors.orange500,
	symbolIconOperator: colors.yellow400,
	symbolIconPackage: colors.gray175,
	symbolIconProperty: colors.cream500,
	symbolIconReference: colors.blue400,
	symbolIconSnippet: colors.gray175,
	symbolIconString: colors.pink500,
	symbolIconStruct: colors.purple400,
	symbolIconText: colors.cream300,
	symbolIconTypeParameter: colors.purple500,
	symbolIconUnit: colors.gray175,
	symbolIconVariable: colors.blue500,

	// =========================================================================
	// CHARTS (VS Code)
	// =========================================================================
	chartsRed: colors.red500,
	chartsOrange: colors.orange500,
	chartsYellow: colors.yellow500,
	chartsGreen: colors.green500,
	chartsBlue: colors.blue400,
	chartsPurple: colors.purple400,
	chartsForeground: colors.cream200,
	chartsLines: colors.gray450,

	// =========================================================================
	// PORTS (VS Code)
	// =========================================================================
	portsRunningProcess: colors.green500,

	// =========================================================================
	// COMMENTS VIEW (VS Code)
	// =========================================================================
	commentsResolvedIcon: colors.gray300,
	commentsUnresolvedIcon: colors.orange500,

	// =========================================================================
	// ACTION BAR (VS Code)
	// =========================================================================
	actionBarToggled: colors.gray575,

	// =========================================================================
	// SIMPLE FIND WIDGET (VS Code)
	// =========================================================================
	simpleFindWidgetBorder: colors.gray700,

	// =========================================================================
	// SCM (Source Control) (VS Code)
	// =========================================================================
	scmHistoryAdditions: colors.green500,
	scmHistoryDeletions: colors.red500,
	scmHistoryStatisticsBorder: colors.gray700,
	scmHistorySelectedStatisticsBorder: colors.orange500,

	// =========================================================================
	// ZED ELEMENT STATES
	// =========================================================================
	zedElementActive: colors.gray550,
	zedElementDisabled: colors.gray700,
	zedElementSelected: colors.gray575,
	zedGhostElementActive: colors.gray600,
	zedGhostElementBackground: colors.transparent,
	zedGhostElementDisabled: colors.gray700,
	zedGhostElementSelected: colors.gray650,

	// =========================================================================
	// ZED ICON COLORS
	// =========================================================================
	zedIcon: colors.gray75,
	zedIconAccent: colors.orange400,
	zedIconDisabled: colors.gray250,
	zedIconMuted: colors.gray175,
	zedIconPlaceholder: colors.gray300,

	// =========================================================================
	// ZED STATUS INDICATORS
	// =========================================================================
	zedRenamed: colors.cyan400,
	zedHidden: colors.gray250,
	zedUnreachable: colors.gray300,
	zedSuccessBackground: `${colors.green500}20`,
	zedSuccessBorder: colors.green500,
	zedInfoBackground: `${colors.cyan400}20`,
	zedInfoBorder: colors.cyan400,
	zedHiddenBackground: `${colors.gray250}20`,
	zedHiddenBorder: colors.gray250,
	zedRenamedBackground: `${colors.cyan400}20`,
	zedRenamedBorder: colors.cyan400,
	zedUnreachableBackground: `${colors.gray300}20`,
	zedUnreachableBorder: colors.gray300,

	// =========================================================================
	// ZED BORDER VARIANTS
	// =========================================================================
	zedBorderTransparent: colors.transparent,
	zedBorderVariant: colors.gray700,
	zedBorderDisabled: colors.gray700,

	// =========================================================================
	// ZED EDITOR REFINEMENTS
	// =========================================================================
	zedEditorActiveLineNumber: colors.gray100,
	zedDocHighlightWrite: `${colors.orange400}30`,
	zedEditorDocHighlightWrite: `${colors.orange400}30`,
	zedEditorSubheaderBackground: colors.gray775,
	zedEditorActiveWrapGuide: colors.gray400,

	// =========================================================================
	// ZED PANEL FOCUS
	// =========================================================================
	zedPanelFocusedBorder: colors.orange400,
	zedPaneFocusedBorder: colors.orange400,

	// =========================================================================
	// ZED SCROLLBAR REFINEMENTS
	// =========================================================================
	zedScrollbarThumbBorder: colors.transparent,
	zedScrollbarThumbHover: `${colors.white}25`,
	zedScrollbarTrackBackground: colors.transparent,
	zedScrollbarTrackBorder: colors.transparent,

	// =========================================================================
	// ZED DROP TARGET
	// =========================================================================
	zedDropTarget: `${colors.orange400}30`,

	// =========================================================================
	// ZED SEARCH
	// =========================================================================
	zedSearchMatch: `${colors.orange500}30`,

	// =========================================================================
	// ZED LINK
	// =========================================================================
	zedLinkTextHover: colors.cyan400,

	// =========================================================================
	// ZED SYNTAX EXTENDED (previously empty tokens)
	// =========================================================================
	zedSyntaxConstructor: colors.cyan500,
	zedSyntaxPreproc: colors.purple300,
	zedSyntaxPrimary: colors.cream150,
	zedSyntaxTitle: colors.pink500,
	zedSyntaxVariant: colors.orange100,
	zedSyntaxPredictive: colors.gray75,
	zedSyntaxStringEscape: colors.orange500,
	zedSyntaxStringRegex: colors.orange400,
	zedSyntaxStringSpecial: colors.orange500,
	zedSyntaxStringSymbol: colors.cyan400,
	zedSyntaxLinkText: colors.cyan400,
	zedSyntaxLinkUri: colors.blue400,

	// =========================================================================
	// ZED TERMINAL COLORS
	// =========================================================================
	zedTerminalBackground: colors.gray825,
	zedTerminalForeground: colors.gray25,
	zedTerminalBlack: colors.gray700,
	zedTerminalRed: colors.red400,
	zedTerminalGreen: colors.green500,
	zedTerminalYellow: colors.yellow600,
	zedTerminalBlue: colors.blue200,
	zedTerminalMagenta: colors.purple200,
	zedTerminalCyan: colors.cyan300,
	zedTerminalWhite: colors.whiteAlt,
	zedTerminalBrightBlack: colors.terminalBlackBright,
	zedTerminalBrightRed: colors.red350,
	zedTerminalBrightGreen: colors.green400,
	zedTerminalBrightYellow: colors.yellow200,
	zedTerminalBrightBlue: colors.blue150,
	zedTerminalBrightMagenta: colors.purple150,
	zedTerminalBrightCyan: colors.cyan200,
	zedTerminalBrightWhite: colors.white,
	zedTerminalDimBlack: colors.gray800,
	zedTerminalDimRed: `${colors.red400}99`,
	zedTerminalDimGreen: `${colors.green500}99`,
	zedTerminalDimYellow: `${colors.yellow600}99`,
	zedTerminalDimBlue: `${colors.blue200}99`,
	zedTerminalDimMagenta: `${colors.purple200}99`,
	zedTerminalDimCyan: `${colors.cyan300}99`,
	zedTerminalDimWhite: `${colors.whiteAlt}99`,
} as const;

// Backwards compatibility - export primitives as alias
export const primitives = colors;

// Type export for variant system
// Use Record to allow string values instead of literal types for variant overrides
export type Semantic = { [K in keyof typeof semantic]: string };
