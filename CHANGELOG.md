## [1.0.3](https://github.com/pgepi/minsky-extension/compare/v1.0.2...v1.0.3) (2026-07-09)

### 🐛 Bug Fixes

* make patch bootstrap self-hosting, not patch-gated ([9f1aeb6](https://github.com/pgepi/minsky-extension/commit/9f1aeb6b00a43a62f198c5bda131a3f942c7e1df))
* restore App.tsx to patch 0001, drop package.json/scripts from it ([7f81a9c](https://github.com/pgepi/minsky-extension/commit/7f81a9cd99ce80d04e005543dec76147ee1703f0))

## [1.0.2](https://github.com/pgepi/minsky-extension/compare/v1.0.1...v1.0.2) (2026-07-09)

### 🐛 Bug Fixes

* rename package.json to minsky-extension ([51e26ce](https://github.com/pgepi/minsky-extension/commit/51e26ce52232803fce0a47301ca8b3b37ba908f1))

## [1.0.1](https://github.com/pgepi/minsky-extension/compare/v1.0.0...v1.0.1) (2026-07-09)

### 🐛 Bug Fixes

* **ci:** stop semantic-release crashing on inherited PR references ([8584c3c](https://github.com/pgepi/minsky-extension/commit/8584c3c1cc312aa1771493e2a2039d652e3e9da7)), closes [#12](https://github.com/pgepi/minsky-extension/issues/12)

## 1.0.0 (2026-07-09)

### ✨ Features

* add AI platform settings dialog with Duck.ai support ([#10](https://github.com/pgepi/minsky-extension/issues/10)) ([55221f9](https://github.com/pgepi/minsky-extension/commit/55221f9af9ecd6ce2166738d4540e0de35f38ea0))
* add filtering, variable editing, and multi-platform support ([#4](https://github.com/pgepi/minsky-extension/issues/4)) ([d0cf5df](https://github.com/pgepi/minsky-extension/commit/d0cf5dfa552e371d7181cadddc816bfca243b36b)), closes [#3](https://github.com/pgepi/minsky-extension/issues/3) [#2](https://github.com/pgepi/minsky-extension/issues/2)
* add GA4 analytics tracking and improve CI workflow ([#5](https://github.com/pgepi/minsky-extension/issues/5)) ([4e3a809](https://github.com/pgepi/minsky-extension/commit/4e3a80948210eb28d6ff62a80da9533de0d60333))
* add prompts.chat browser extension to app registry ([#12](https://github.com/pgepi/minsky-extension/issues/12)) ([e61b6b0](https://github.com/pgepi/minsky-extension/commit/e61b6b04e68344a1e07236a0ef2213cbc7ddcb11))
* add sidepanel notice for popup users ([#6](https://github.com/pgepi/minsky-extension/issues/6)) ([031cee8](https://github.com/pgepi/minsky-extension/commit/031cee8763df4bbd79680ac8b2fb50d52c99c1e4))
* Migrate to WXT framework with Firefox support ([#9](https://github.com/pgepi/minsky-extension/issues/9)) ([4c58f0c](https://github.com/pgepi/minsky-extension/commit/4c58f0cc2bb8febcf76b626f49c1119d4206cc47))

### 🐛 Bug Fixes

* add build verification before release and fix popup context detection ([#7](https://github.com/pgepi/minsky-extension/issues/7)) ([67f3833](https://github.com/pgepi/minsky-extension/commit/67f3833351fa3c5d7ca6c50be9fba07bb697640e))
* fetch full prompt content from detail endpoint after list API dropped content field ([bded6c9](https://github.com/pgepi/minsky-extension/commit/bded6c910f3dca73c5e9c77e305a7b93e415b7e1))
* handle undefined content in HighlightedContent to prevent white screen crash ([025029e](https://github.com/pgepi/minsky-extension/commit/025029e292ceecae894120e19a200dc1c9b8c65d))

### 👷 CI

* update release to include firefox ([fe7dfbf](https://github.com/pgepi/minsky-extension/commit/fe7dfbf1e998e367d649752d610586720a30d3f7))

### 🔧 Maintenance

* bump version to 1.2.0 ([70d4dd3](https://github.com/pgepi/minsky-extension/commit/70d4dd3b9c2aa1c8b1671f55d969925c8928b635))
* improve release process and documentation ([6b4f266](https://github.com/pgepi/minsky-extension/commit/6b4f2663dd2759130e7ad64a390df3d8f54b6df0))
* **release:** 1.0.0 ([5164af0](https://github.com/pgepi/minsky-extension/commit/5164af0dc19c496a929a0d452c47df0e7702fa82))
* **release:** 1.1.0 ([88b5fb9](https://github.com/pgepi/minsky-extension/commit/88b5fb93e1e6a8f1190ad7d0ff2c5e4d5237e99a)), closes [#3](https://github.com/pgepi/minsky-extension/issues/3) [#2](https://github.com/pgepi/minsky-extension/issues/2)
* **release:** 1.1.1 ([21604d0](https://github.com/pgepi/minsky-extension/commit/21604d02b286ca0205e39d293a19a25715c37023))
* **release:** 1.2.0 ([1bed295](https://github.com/pgepi/minsky-extension/commit/1bed29528b09a38bbd091b5febad5ac82da9eca9)), closes [#5](https://github.com/pgepi/minsky-extension/issues/5)
* **release:** 1.3.0 ([9501adf](https://github.com/pgepi/minsky-extension/commit/9501adfe9118a50f06344f59aece6e219933be04)), closes [#6](https://github.com/pgepi/minsky-extension/issues/6)
* **release:** 1.3.1 ([b25190a](https://github.com/pgepi/minsky-extension/commit/b25190a63bc7ae51f916dd25904f0acf61accb62)), closes [#7](https://github.com/pgepi/minsky-extension/issues/7)
* **release:** 1.3.2 ([5d1fddb](https://github.com/pgepi/minsky-extension/commit/5d1fddb9c893b5e64a93c635f0d9a993f0f17576)), closes [#8](https://github.com/pgepi/minsky-extension/issues/8)
* **release:** 1.4.0 ([de185f9](https://github.com/pgepi/minsky-extension/commit/de185f96fb07ec69fb9e0be44b6e9eece6ae3b14)), closes [#9](https://github.com/pgepi/minsky-extension/issues/9)
* **release:** 1.5.0 ([0d9a07d](https://github.com/pgepi/minsky-extension/commit/0d9a07d84efb4c5ec5e89918068321120f28c1a7)), closes [#10](https://github.com/pgepi/minsky-extension/issues/10)
* **release:** 1.5.1 ([fc7af5d](https://github.com/pgepi/minsky-extension/commit/fc7af5d880e7ec505d00e16f74f7cbdbbaf0b41b))
* **release:** 1.5.2 ([b47bc6c](https://github.com/pgepi/minsky-extension/commit/b47bc6c2078c07bee632e34ff061bde9707ddf31))
* **release:** 1.6.0 ([4c8f784](https://github.com/pgepi/minsky-extension/commit/4c8f78401cec6b5b483b67667c01e709604de8b4)), closes [#12](https://github.com/pgepi/minsky-extension/issues/12)
* **release:** 1.6.1 ([4de7a82](https://github.com/pgepi/minsky-extension/commit/4de7a82759f75e9bc1d36b0bd533d7639aed8816))
* **release:** 1.6.2 ([3b97cc2](https://github.com/pgepi/minsky-extension/commit/3b97cc23ec71df3609b4087695ec13a36bebb9fd))
* remove unused scripting permission ([0e44ee5](https://github.com/pgepi/minsky-extension/commit/0e44ee515bb5929cb7097e8afcfd63c7ce80772b))
* trigger release ([359e6f4](https://github.com/pgepi/minsky-extension/commit/359e6f4a503b30fe89ce5c823db7dc832f11916e))
* update branding to match prompts.chat ([#8](https://github.com/pgepi/minsky-extension/issues/8)) ([dbd7c48](https://github.com/pgepi/minsky-extension/commit/dbd7c488c364153c1fc0c80156de76cdea064f78))

## [1.6.2](https://github.com/fatihsolhan/prompts-chat-extension/compare/v1.6.1...v1.6.2) (2026-05-31)

### 🐛 Bug Fixes

* fetch full prompt content from detail endpoint after list API dropped content field ([bded6c9](https://github.com/fatihsolhan/prompts-chat-extension/commit/bded6c910f3dca73c5e9c77e305a7b93e415b7e1))

## [1.6.1](https://github.com/fatihsolhan/prompts-chat-extension/compare/v1.6.0...v1.6.1) (2026-03-20)

### 🐛 Bug Fixes

* handle undefined content in HighlightedContent to prevent white screen crash ([025029e](https://github.com/fatihsolhan/prompts-chat-extension/commit/025029e292ceecae894120e19a200dc1c9b8c65d))

## [1.6.0](https://github.com/fatihsolhan/prompts-chat-extension/compare/v1.5.2...v1.6.0) (2026-03-19)

### ✨ Features

* add prompts.chat browser extension to app registry ([#12](https://github.com/fatihsolhan/prompts-chat-extension/issues/12)) ([e61b6b0](https://github.com/fatihsolhan/prompts-chat-extension/commit/e61b6b04e68344a1e07236a0ef2213cbc7ddcb11))

## [1.5.2](https://github.com/fatihsolhan/prompts-chat-extension/compare/v1.5.1...v1.5.2) (2026-02-28)

### 🔧 Maintenance

* trigger release ([359e6f4](https://github.com/fatihsolhan/prompts-chat-extension/commit/359e6f4a503b30fe89ce5c823db7dc832f11916e))

## [1.5.1](https://github.com/fatihsolhan/prompts-chat-extension/compare/v1.5.0...v1.5.1) (2026-02-28)

### 👷 CI

* update release to include firefox ([fe7dfbf](https://github.com/fatihsolhan/prompts-chat-extension/commit/fe7dfbf1e998e367d649752d610586720a30d3f7))

## [1.5.0](https://github.com/fatihsolhan/prompts-chat-extension/compare/v1.4.0...v1.5.0) (2026-02-28)

### ✨ Features

* add AI platform settings dialog with Duck.ai support ([#10](https://github.com/fatihsolhan/prompts-chat-extension/issues/10)) ([55221f9](https://github.com/fatihsolhan/prompts-chat-extension/commit/55221f9af9ecd6ce2166738d4540e0de35f38ea0))

## [1.4.0](https://github.com/fatihsolhan/prompts-chat-extension/compare/v1.3.2...v1.4.0) (2026-01-25)

### ✨ Features

* Migrate to WXT framework with Firefox support ([#9](https://github.com/fatihsolhan/prompts-chat-extension/issues/9)) ([4c58f0c](https://github.com/fatihsolhan/prompts-chat-extension/commit/4c58f0cc2bb8febcf76b626f49c1119d4206cc47))

## [1.3.2](https://github.com/fatihsolhan/prompts-chat-extension/compare/v1.3.1...v1.3.2) (2026-01-04)

### 🔧 Maintenance

* update branding to match prompts.chat ([#8](https://github.com/fatihsolhan/prompts-chat-extension/issues/8)) ([dbd7c48](https://github.com/fatihsolhan/prompts-chat-extension/commit/dbd7c488c364153c1fc0c80156de76cdea064f78))

## [1.3.1](https://github.com/fatihsolhan/prompts-chat-extension/compare/v1.3.0...v1.3.1) (2026-01-02)

### 🐛 Bug Fixes

* add build verification before release and fix popup context detection ([#7](https://github.com/fatihsolhan/prompts-chat-extension/issues/7)) ([67f3833](https://github.com/fatihsolhan/prompts-chat-extension/commit/67f3833351fa3c5d7ca6c50be9fba07bb697640e))

## [1.3.0](https://github.com/fatihsolhan/prompts-chat-extension/compare/v1.2.0...v1.3.0) (2026-01-02)

### ✨ Features

* add sidepanel notice for popup users ([#6](https://github.com/fatihsolhan/prompts-chat-extension/issues/6)) ([031cee8](https://github.com/fatihsolhan/prompts-chat-extension/commit/031cee8763df4bbd79680ac8b2fb50d52c99c1e4))

## [1.2.0](https://github.com/fatihsolhan/prompts-chat-extension/compare/v1.1.1...v1.2.0) (2025-12-28)

### ✨ Features

* add GA4 analytics tracking and improve CI workflow ([#5](https://github.com/fatihsolhan/prompts-chat-extension/issues/5)) ([4e3a809](https://github.com/fatihsolhan/prompts-chat-extension/commit/4e3a80948210eb28d6ff62a80da9533de0d60333))

## [1.1.1](https://github.com/fatihsolhan/prompts-chat-extension/compare/v1.1.0...v1.1.1) (2025-12-27)

### 🔧 Maintenance

* bump version to 1.2.0 ([70d4dd3](https://github.com/fatihsolhan/prompts-chat-extension/commit/70d4dd3b9c2aa1c8b1671f55d969925c8928b635))

## [1.1.0](https://github.com/fatihsolhan/prompts-chat-extension/compare/v1.0.0...v1.1.0) (2025-12-27)

### ✨ Features

* add filtering, variable editing, and multi-platform support ([#4](https://github.com/fatihsolhan/prompts-chat-extension/issues/4)) ([d0cf5df](https://github.com/fatihsolhan/prompts-chat-extension/commit/d0cf5dfa552e371d7181cadddc816bfca243b36b)), closes [#3](https://github.com/fatihsolhan/prompts-chat-extension/issues/3) [#2](https://github.com/fatihsolhan/prompts-chat-extension/issues/2)

## 1.0.0 (2025-02-11)

### 🔧 Maintenance

* improve release process and documentation ([6b4f266](https://github.com/fatihsolhan/prompts-chat-extension/commit/6b4f2663dd2759130e7ad64a390df3d8f54b6df0))
* remove unused scripting permission ([0e44ee5](https://github.com/fatihsolhan/prompts-chat-extension/commit/0e44ee515bb5929cb7097e8afcfd63c7ce80772b))

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2024-02-08

### Added
- Automated release process with semantic-release
- Chrome Web Store automated publishing
- Privacy Policy for Chrome Web Store compliance

### Changed
- Updated AboutDialog component ordering and titles
- Improved documentation and README
- Removed manual installation in favor of Chrome Web Store
- Updated development guidelines

## [1.0.0] - 2024-02-07

### Added
- Initial release
- Dark/Light mode support
- Enhanced search capabilities
- Quick copy functionality
- Modern UI with seamless integration
- Support for multiple AI platforms:
  - ChatGPT
  - Claude
  - GitHub Copilot
  - Google Gemini
  - Perplexity
  - Mistral
- Side panel support for easy access
- Performance optimizations
