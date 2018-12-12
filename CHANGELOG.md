# Changelog

All notable changes to this project will be documented in this file.

The format of this changelog is based on [Keep a Changelog](https://keepachangelog.com) and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased](https://github.com/nai888/langua/compare/v0.2.5...HEAD)

### Added 0.2.6

- Add the Deriv form controls.
- Add the Deriv default data.
- Start adding instructions to Deriv Help.

### Changed 0.2.6

- Update dependencies.

## [v0.2.5](https://github.com/nai888/langua/compare/v0.2.4...v0.2.5) - 2018-12-11

### Added 0.2.5

- Create a Tool component.

### Changed 0.2.5

- Adjust Frequen graph height to make bar width more consistent.
- Remove unused segments from Frequen graph and table.
- Extract a tool info object for each tool to populate those details across the site.
- Refactor all tools to use the new Tool component
- Update dependencies.

## [v0.2.4](https://github.com/nai888/langua/compare/v0.2.3...v0.2.4) - 2018-12-07

### Added 0.2.4

- Add loading animation.
- Add a component tests to FrequenResults and GenResults.
- Add template pages for LanguaLex.
- Add LanguaLex to the development roadmap in the README.

### Changed 0.2.4

- Fix missing PropType in GenResults.
- Adjust conditional display of cells in FrequenResults table to be more efficient.
- Add additional filters to state.
- Change `yarn test` to `yarn test-with-coverage` and change `yarn test-no-coverage` to `yarn test`.
- Update dependencies.

## [v0.2.3](https://github.com/nai888/langua/compare/v0.2.2...v0.2.3) - 2018-10-29

### Added 0.2.3

- Add basic tests to all components.
- Add react-test-renderer and enzyme for more in-depth testing.
- Add snapshot and DOM tests to several components.
- Add save and open buttons to Frequen.

### Changed 0.2.3

- Fix PropTypes for children in Button and Help files.
- Create a Form component with shared styles and refactor all tool forms to use the new component.
- Create a Results component with shared styles and refactor all tool results to use the new component.
- Create various Controls components and refactor all tool forms and results to use the new components.
- Move all pages into a separate /routes folder.
- Rename all main files to index.js for easier import.
- Update dependencies.

### Removed 0.2.3

- Remove unneeded code for creating a file picker in Button.js.

## [v0.2.2](https://github.com/nai888/langua/compare/v0.2.1...v0.2.2) - 2018-10-27

### Added 0.2.2

- Add option to distinguish case in Frequen.
- Add filtering to the Frequen results.
- Add information about saving and opening settings in FrequenHelp.
- Add acknowledgments to the bottom of GenHelp and FrequenHelp.
- Create a Help component.

### Changed 0.2.2

- Update Gen description in meta tags, in Home, and in the README.
- Refactor all Help pages to use the new Help component.
- Fix bug with opening a `.lngg` file not updating state immediately.
- Update dependencies.

## [v0.2.1](https://github.com/nai888/langua/compare/v0.2.0...v0.2.1) - 2018-10-23

### Added 0.2.1

- Add test script that doesn't include coverage reporting.
- Add Prettier Standard for automatic reformatting to Standard format.
- Add table to Frequen to display data results.
- Add instructions to FrequenHelp.

### Changed 0.2.1

- Fix issue where re-analyzing didn't update Frequen analysis until refresh.
- Improve appearance of Frequen's graphical output.
- Update dependencies.

### Removed 0.2.1

- Remove `disabled` formatting for Frequen in the Header and the Home page.

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
- Refactor Home panels into a separate component for reusability.
- Fill out remaining information in the Gen Help file.
- Refactor Gen component form handling.
- Adjust page centering to remain consistent as the vertical scrollbar appears or disappears.
- Update dependencies.

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
- Update dependencies.

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

## [v0.1.2](https://github.com/nai888/langua/compare/d0ce8c9ed58aeef8802092d220af7c57f9f0da29...a6e3d281e83fee7648864ac8eaee3f3b8a1b37ff) - 2018-04-27

### Added 0.1.2

- Build site framework.
- Build basic version of the Gen tool.
