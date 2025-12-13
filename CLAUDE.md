# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Short Giraffe is a dark color theme for VS Code and Zed editors. It's a dual-platform theme project that maintains separate but coordinated theme definitions for both editors.

## Project Structure

```
├── src/                    # Theme generation source (single source of truth)
│   ├── palette.ts          # All color definitions
│   ├── tokens.ts           # Shared syntax token styles
│   ├── types.ts            # TypeScript interfaces
│   ├── generate.ts         # Generator script
│   ├── vscode/             # VS Code specific mappings
│   │   ├── ui.ts           # 200+ UI color properties
│   │   ├── tokenColors.ts  # TextMate scope rules
│   │   └── semantic.ts     # Semantic token colors
│   └── zed/                # Zed specific mappings
│       ├── style.ts        # UI style properties
│       └── syntax.ts       # Syntax highlighting
├── vscode/theme.json       # Generated VS Code theme
├── themes/zed.json         # Generated Zed theme
├── package.json            # VS Code extension manifest
├── extension.toml          # Zed extension manifest
└── demo/                   # Demo files for testing
```

## Core Architecture

### Single Source of Truth
All colors are defined in `src/palette.ts`. The generator (`bun src/generate.ts`) produces both theme files:
- `vscode/theme.json` - Generated from palette + VS Code mappings
- `themes/zed.json` - Generated from palette + Zed mappings

**Never edit theme.json or zed.json directly** - modify the source files in `src/` instead.

### Color Palette
Core colors defined in `src/palette.ts`:
- Primary accent: `#FFB69E` and `#F29E74` (orange/coral tones)
- Functions: `#45CAC2` (cyan)
- Strings: `#F6ABA8` (pink)
- Keywords: `#F5DA7A` (yellow)
- Variables: `#BBD2EE` (light blue)
- Background: Dark blues (`#191F2B` for VS Code, `#141821` for Zed)

### Theme Features
- Semantic highlighting support
- Comprehensive language support (CSS, HTML, JSON, Markdown, Vue, etc.)
- Carefully crafted syntax colors for code readability
- Consistent UI theming across panels, sidebars, and editor

## Publishing

### VS Code Extension
- Publisher: `kumamaki`
- Package manager: `pnpm@9.12.3`
- Uses `.vsix` packaging for distribution

### Zed Extension
- Follows Zed's extension format with `extension.toml`
- Theme schema version: `v0.1.0.json`

## Development Commands

```bash
# Generate both theme files from source
pnpm generate

# Watch mode - regenerate on source changes
pnpm generate:watch

# Type check
pnpm exec tsc --noEmit
```

## Development Workflow

1. **Modify colors**: Edit `src/palette.ts` to change color values
2. **Modify syntax**: Edit `src/tokens.ts` or editor-specific files in `src/vscode/` or `src/zed/`
3. **Regenerate**: Run `pnpm generate` to update theme files
4. **Test**: Preview changes in VS Code or Zed
5. **Commit**: Commit both source files AND generated theme files

## File Modification Guidelines

When updating colors:
1. **Edit source files only** - never edit `vscode/theme.json` or `themes/zed.json` directly
2. Test changes across multiple languages shown in `demo/` folder
3. Ensure semantic highlighting tokens are properly defined
4. Keep accessibility and readability in mind for the dark theme approach

## Version Management

Version numbers must be synchronized across:
- `package.json` (VS Code)
- `extension.toml` (Zed)
- Update `CHANGELOG.md` for release notes