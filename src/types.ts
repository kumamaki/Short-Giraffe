// VS Code theme types
export interface VSCodeTokenColorSettings {
	foreground?: string;
	fontStyle?: string;
}

export interface VSCodeTokenColor {
	name: string;
	scope: string | string[];
	settings: VSCodeTokenColorSettings;
}

export interface VSCodeTheme {
	name: string;
	type: "dark" | "light";
	colors: Record<string, string>;
	tokenColors: VSCodeTokenColor[];
	semanticHighlighting: boolean;
	semanticTokenColors: Record<string, string>;
}

// Zed theme types
export interface ZedSyntaxStyle {
	color?: string;
	font_style?: string | null;
	font_weight?: number | null;
}

export interface ZedPlayer {
	cursor: string;
	background: string;
	selection: string;
}

export interface ZedStyle {
	[key: string]: string | ZedPlayer[] | Record<string, ZedSyntaxStyle>;
	players: ZedPlayer[];
	syntax: Record<string, ZedSyntaxStyle>;
}

export interface ZedThemeDefinition {
	name: string;
	appearance: "dark" | "light";
	style: ZedStyle;
}

export interface ZedTheme {
	$schema: string;
	name: string;
	author: string;
	type: "dark" | "light";
	themes: ZedThemeDefinition[];
}
