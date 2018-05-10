# Changelog

All notable changes to this project will be documented in this file.

The format of this changelog is based on [Keep a Changelog](https://keepachangelog.com) and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added

- Create this Changelog. (See [issue #9](https://github.com/nai888/langua/issues/9).)
- Add toast notifications to indicate: (See [issue #12](https://github.com/nai888/langua/issues/12).)
  - The app has been fully cached and can be accessed offline.
  - An updated verision of the app is available and can be loaded by reloading the page.
  - An internet connection is unavailable and the app is being served from the cache.

### Changed

- Add locale formatting to the statistics shown at the bottom of the Gen page. (See [issue #10](https://github.com/nai888/langua/issues/10).)
- Reformat some of the code to use regex instead of naming several different possible matches.
- Clarify deployment documentation in README.md.

### Removed

- Delete the `console.log()` calls and reformatted some of the code within the Gen results function.
- Remove react-snap from the build process for now, since it currently assigns CSS classes incorrectly. (See [issue #11](https://github.com/nai888/langua/issues/11).)

## [v0.1.3] - 2018-04-27

### Added

- Add calculation of maximum words and filtered words.
- Create pull request template.
- Create CONTRIBUTING.md guidelines.

### Changed

- Update typography CSS to improve spacing.
- Refactor typography CSS among elements with shared styling.
- Add version number to issue template.
- Add link to CONTRIBUTING.md to README.md.
- Clarify deployment documentation in README.md.
