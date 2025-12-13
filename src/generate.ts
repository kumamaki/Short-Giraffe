/**
 * Theme Generator
 * Generates VS Code and Zed themes from the shared palette
 */

import { writeFileSync } from "node:fs";
import { vscodeColors } from "./vscode/ui";
import { vscodeTokenColors } from "./vscode/tokenColors";
import { vscodeSemanticTokenColors } from "./vscode/semantic";
import { zedStyle, zedPlayers } from "./zed/style";
import { zedSyntax } from "./zed/syntax";
import type { VSCodeTheme, ZedTheme, ZedStyle } from "./types";

// =============================================================================
// VS Code Theme Generation
// =============================================================================

function generateVSCodeTheme(): void {
	const theme: VSCodeTheme = {
		name: "Short Giraffe",
		type: "dark",
		colors: vscodeColors,
		tokenColors: vscodeTokenColors,
		semanticHighlighting: true,
		semanticTokenColors: vscodeSemanticTokenColors,
	};

	// Write with 3-space indentation to match original format
	writeFileSync(
		"./vscode/theme.json",
		JSON.stringify(theme, null, 3) + "\n"
	);

	console.log("✓ Generated: vscode/theme.json");
}

// =============================================================================
// Zed Theme Generation
// =============================================================================

function generateZedTheme(): void {
	// Build style object with players and syntax embedded
	const style: ZedStyle = {
		...zedStyle,
		players: zedPlayers,
		syntax: zedSyntax,
	};

	const theme: ZedTheme = {
		$schema: "https://zed.dev/schema/themes/v0.1.0.json",
		name: "Short Giraffe",
		author: "kumamaki <8641684+kumamaki@users.noreply.github.com>",
		type: "dark",
		themes: [
			{
				name: "Short Giraffe",
				appearance: "dark",
				style,
			},
		],
	};

	// Write with tab indentation to match original format
	writeFileSync(
		"./themes/zed.json",
		JSON.stringify(theme, null, "\t") + "\n"
	);

	console.log("✓ Generated: themes/zed.json");
}

// =============================================================================
// Main
// =============================================================================

console.log("\n🦒 Short Giraffe Theme Generator\n");

generateVSCodeTheme();
generateZedTheme();

console.log("\n✨ Done!\n");
