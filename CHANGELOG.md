# Changelog

All notable changes to Short Giraffe will be documented in this file.

Based on [Keep a Changelog](http://keepachangelog.com/).

## [2.5.1] - 2026-08-19

### Changed

- Zed package now lives in `zed/` (`extension.toml` + `themes/*.json`) so the gallery only sees Zed files
- Oh My Pi theme moved to `omp/short-giraffe.json`

## [2.5.0] - 2026-08-19

### Changed

- Zed UI restack on the xy-zed contrast model: three navy planes, white hairlines, coral washes
- Default, Darker, and High Contrast variants keep distinct chrome / panel / editor surfaces
- Zed theme schema bumped to `v0.2.0`

## [2.4.0] - 2026-07-25

### Added

- Otty terminal theme target with three variants (default, darker, high contrast)
- Rich Otty chrome (`token`, `panel`, `window`, `titlebar`, `sidebar`, `tab`, `container`) mapped from the shared palette
- Theme generator produces `src/otty/*.ottytheme` alongside existing targets

## [2.3.0] - 2026-06-06

### Added

- opencode theme target with three variants (default, darker, high contrast)
- Theme generator produces `.opencode/themes/short-giraffe*.json` alongside existing targets

## [2.2.1] - 2026-05-07

### Changed

- Registry maintenance: refresh Zed extensions registry pointer

## [2.2.0] - 2026-01-27

### Added

- Theme variant system with **Darker** and **High Contrast** variants for VS Code and Zed
- Terminal theme support for **iTerm2**, **Warp**, and **Ghostty**
- Theme generator for single source of truth across all editors
- Justfile for local theme development workflow
- Theme-aware logo for GitHub dark/light mode

### Changed

- Restructured palette with separated colors + semantic naming
- Expanded theme coverage to ~95% of VS Code and Zed tokens
- Harmonized Zed syntax colors with VS Code
- Improved active tab and selection styling in Zed
- Reduced diff editor background opacity for better comment visibility
- Changed license to GPLv3 for Zed compatibility

### Fixed

- Buttons and checkboxes visibility in VS Code
- Button hover feedback and secondary button distinction
- Tree selection styling and VS Code packaging
- Removed deprecated `[[themes]]` from Zed extension.toml

## [2.1.0]

- Initial public release with VS Code and Zed support
