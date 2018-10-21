# Changelog

All notable changes to this project will be documented in this file.

The format of this changelog is based on [Keep a Changelog](https://keepachangelog.com) and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased](https://github.com/nai888/langua/compare/v0.2.0...HEAD)

### Changed 0.2.1

### Removed 0.2.1

- Remove `disabled` formatting for Frequen in the Header and the Home page

## [v0.2.0](https://github.com/nai888/langua/compare/v0.1.6...v0.2.0) - 2018-10-19

### Added 0.2.0

- Add PropTypes.
- Add Codacy and codacy-coverage.
- Add eslint and codacy-coverage to TravisCI.
- Add remark-lint.
- Add basic structure of Frequen tool.
- Add graphical analysis to Frequen tool, including tooltips to show exact data.

### Changed 0.2.0

- Change `file.name.slice(-5) === '.lngg'` to `file.name.endsWith('.lngg')`.
- Open files directly when clicking the Open button, rather than unhiding a file input element. (See [issue #50](https://github.com/nai888/langua/issues/50).)
- Update dependencies.
- Refactor Home panels into a separate component for reusability.
- Fill out remaining information in the Gen Help file.
- Refactor Gen component form handling.
- Adjust page centering to remain consistent as the vertical scrollbar appears or disappears.

### Removed 0.2.0

- Remove Flow.

## [v0.1.6](https://github.com/nai888/langua/compare/v0.1.5...v0.1.6) - 2018-09-30

### Added 0.1.6

- Add v0.1.2 to this CHANGELOG.
- Add links to GitHub's version comparing for each of the versions.
- Add [Renovate integration](https://renovatebot.com/) to continually maintain dependencies.
- Add function to save Gen settings to a `.lngg` text file.
- Add function to open `.lngg` files, process and validate the content, and load the settings into Gen.

### Changed 0.1.6

- Fix bug preventing variable use within Subpatterns.
- Improve error checker when finding circular references in the Subpatterns.
- Expand the error checker that finds undefined variables in the Pattern to check Subpatterns as well.
- Update dependencies.

## [v0.1.5](https://github.com/nai888/langua/compare/v0.1.4...v0.1.5) - 2018-07-04

### Added 0.1.5

- Add `role` to `<button>` elements, and give `ButtonLink` components `role='link'`.
- Add an input error checker that verifies the Gen input is valid and displays an error if it is not.
- Add Flow type checking to all JavaScript files.
- Add a few basic unit tests to the site's source files.

### Changed 0.1.5

- Update the Filter Duplicates option so that it updates the results immediately, rather than needing to re-generate the results before taking effect.
- Change HelpLink component (a link styled like a button) to a ButtonLink component (a button that changes the URL). (See [issue #13](https://github.com/nai888/langua/issues/13).)
- Refactor GenService so it reads in order without needing to call an internal function for getStats().
- Change internal links in the README to relative links.
- Link to the CHANGELOG in the footer instead of to the README#versioning header.
- Refactor the top-level Router into its own page so that index.js *only* handles rendering.

## [v0.1.4](https://github.com/nai888/langua/compare/v0.1.3...v0.1.4) - 2018-05-12

### Added 0.1.4

- Create this Changelog. (See [issue #9](https://github.com/nai888/langua/issues/9).)
- Add toast notifications to indicate: (See [issue #12](https://github.com/nai888/langua/issues/12).)
  - The app has been fully cached and can be accessed offline.
  - An updated verision of the app is available and can be loaded by reloading the page.
  - An internet connection is unavailable and the app is being served from the cache.

### Changed 0.1.4

- Add locale formatting to the statistics shown at the bottom of the Gen page. (See [issue #10](https://github.com/nai888/langua/issues/10).)
- Reformat some of the code to use regex instead of naming several different possible matches.
- Refactor code from Gen component to GenService external service.
- Clarify deployment documentation in README.md.
- Update dependencies.

### Removed 0.1.4

- Delete the `console.log()` calls and reformatted some of the code within the Gen results function.
- Remove react-snap from the build process for now, since it currently assigns CSS classes incorrectly. (See [issue #11](https://github.com/nai888/langua/issues/11).)

## [v0.1.3](https://github.com/nai888/langua/compare/b5e3e039d054041d8757ffa331d4702b9ea60dd8...v0.1.3) - 2018-04-27

### Added 0.1.3

- Add calculation of maximum words and filtered words.
- Create pull request template.
- Create CONTRIBUTING.md guidelines.

### Changed 0.1.3

- Update typography CSS to improve spacing.
- Refactor typography CSS among elements with shared styling.
- Add version number to issue template.
- Add link to CONTRIBUTING.md to README.md.
- Clarify deployment documentation in README.md.

## [v0.1.2](https://github.com/nai888/langua/compare/d0ce8c9ed58aeef8802092d220af7c57f9f0da29...a6e3d281e83fee7648864ac8eaee3f3b8a1b37ff)

### Added 0.1.2

- Build site framework.
- Build basic version of the Gen tool.
