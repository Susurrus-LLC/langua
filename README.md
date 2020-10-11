# Langua

[![Build Status](https://travis-ci.com/Susurrus-LLC/langua.svg?branch=master)](https://travis-ci.com/Susurrus-LLC/langua)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/41a3616c2dfa484da0e2eb52d47ee444)](https://www.codacy.com/gh/Susurrus-LLC/langua/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Susurrus-LLC/langua&amp;utm_campaign=Badge_Grade)
[![Codacy Coverage Badge](https://api.codacy.com/project/badge/Coverage/41a3616c2dfa484da0e2eb52d47ee444)](https://www.codacy.com/app/Langua/langua?utm_source=github.com&utm_medium=referral&utm_content=Susurrus-LLC/langua&utm_campaign=Badge_Coverage)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=Susurrus-LLC/langua)](https://dependabot.com)
[![](https://img.shields.io/github/release/Susurrus-LLC/langua.svg)](https://github.com/Susurrus-LLC/langua/releases)
[![](https://img.shields.io/github/license/Susurrus-LLC/langua.svg)](https://github.com/Susurrus-LLC/langua/blob/master/LICENSE)

1. [Overview](#overview)
1. [Deployment](#deployment)
1. [Versioning](#versioning)
1. [Development Roadmap](#development-roadmap)
1. [Contributing](#contributing)
1. [Authors](#authors)
1. [Acknowledgments](#acknowledgments)
1. [License](#license)

## Overview

Langua is a suite of language tools that can be used for testing, experimentation, learning, analysis, or creation. There are several main tools: [Gen](#gen), [Morph](#morph), [Deriv](#deriv), [Frequen](#frequen), [Tree](#tree), and [Lex](#lex).

### Gen

LanguaGen is a tool for automatically building a set of words based on arbitrary rules of phonotactics. This can be used to create a dummy vocabulary for linguistic experimentation, to generate words or names for a naming language in a work of fantasy or science fiction, or as the basis for building the vocabulary of a constructed language.

### Morph

LanguaMorph is a tool for modeling historical sound change according to arbitrary rules of phonetic change.

### Deriv

LanguaDeriv is a tool for modeling word derivation based on a given list of lexemes and affixes.

### Frequen

LanguaFrequen is a tool for analyzing phoneme frequencies in a given text.

### Tree

LanguaTree is a tool for drawing and labeling syntax trees.

### Lex

LanguaLex is a tool for building a lexicon or dictionary for a language and exporting it to various formats.

## Deployment

Langua is a web-based tool built on JavaScript, and it does not use a database, so it can be installed almost anywhere without need for running a back-end server. You simply need to run the build command to build the files, then deploy to your site.

### Deployment to Subfolder /langua

If you are installing Langua in the subfolder /langua (e.g. `*.com/langua/`), all you need to do is build and deploy:

1. Download and unpack the [latest release](../../releases/latest).
1. Install the dependencies with `yarn`.
1. Build the project with `yarn build`.
1. Copy the contents of the resulting /build folder into the /langua subfolder on your server. You're done!

### Deployment to Subfolder Other than /langua

If you are installing Langua in a subfolder (e.g. `*.com/languages/`), you will need to change the basename for the router before you build the project:

1. Download and unpack the [latest release](../../releases/latest).
1. Install the dependencies with `yarn`.
1. Open `gatsby-config.js` and change `pathPrefix: &grave;/langua&grave;,` to `pathPrefix: &grave;/yoursubfolder&grave;,`.
1. Build the project with `yarn build`.
1. Copy the contents of the resulting /build folder into the appropriate subfolder on your server. You're done!

### Deployment to Root

If you are installing Langua in a website's root (e.g. a URL that ends in `.com`, `.org`, or similar):

1. Download and unpack the [latest release](../../releases/latest).
1. Install the dependencies with `yarn`.
1. Open `gatsby-config.js` and change `pathPrefix: &grave;/langua&grave;,` to `pathPrefix: &grave;&grave;,`.
1. Build the project with `yarn build`.
1. Copy the contents of the resulting /build folder into the root of your server. You're done!

## Versioning

Langua uses an unstable Master branch. The master branch is used for development, while stable versions are provided as releases. Version numbering is similar to [Semantic Versioning](http://semver.org/); versions are listed as x.y.z., wherein z refers to bug fixes and very minor updates, y refers to minor additions and updates to functionality, and x refers to major updates or overhauls to the program that significantly impact workflow or the use of the program.

For a full list of all changes made in each version of Langua, see the [Changelog](./CHANGELOG.md).

## Development Roadmap

- [x] **v0.0.x:** Building the architecture of the site.
- [x] **v0.1.x:** Building the [Gen](#gen) tool; bug fixes and other small updates.
- [x] **v0.2.x:** [Gen](#gen) tool basic functionality working; building the [Frequen](#frequen) tool; bug fixes and other small updates.
- [x] **v0.3.x:** [Gen](#gen) and [Frequen](#frequen) tools basic functionality working; building the [Deriv](#deriv) tool; bug fixes and other small updates.
- [x] **v0.4.x:** [Gen](#gen), [Frequen](#frequen), and [Deriv](#deriv) tools basic functionality working; building the [Morph](#morph) tool; bug fixes and other small updates.
- [ ] **v0.5.x:** [Gen](#gen), [Frequen](#frequen), [Deriv](#deriv), and [Morph](#morph) tools basic functionality working; building the [Lex](#lex) tool; bug fixes and other small updates.
- [ ] **v0.6.x:** [Gen](#gen), [Frequen](#frequen), [Deriv](#deriv), [Morph](#morph), and [Lex](#lex) tools basic functionality working; building the [Tree](#tree) tool; bug fixes and other small updates.
- [ ] **v1.x.x:** All tools functional; bug fixes and ongoing development.

## Contributing

Please review the [contributing guidelines](./CONTRIBUTING.md) and [code of conduct](./CODE_OF_CONDUCT.md) before contributing.

## Authors

- [Ian A. Cook](https://github.com/nai888)

See also the list of [people who have contributed](../../graphs/contributors) to this project.

## Acknowledgments

Langua was inspired by several existing tools, including:

- [Awkwords](http://akana.conlang.org/tools/awkwords/)
- [Gen](http://www.zompist.com/gen.html)
- [SCA2](http://www.zompist.com/sca2.html)
- [ConWorkShop PhoMo](http://conworkshop.info/phomo.php)
- [The Derivizer](http://akana.conlang.org/tools/derivizer.html)
- [The Frequentizer](http://akana.conlang.org/tools/frequentizer.html)
- [phpSyntaxTree](http://ironcreek.net/phpsyntaxtree/)
- [SynTree](http://mshang.ca/syntree/)
- [RSyntaxTree](https://www.yohasebe.com/rsyntaxtree/)

## License

Langua is licensed under the [GNU Affero General Public License v3.0](https://choosealicense.com/licenses/agpl-3.0/).
