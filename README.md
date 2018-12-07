# Langua

[![Build Status](https://travis-ci.com/nai888/langua.svg?branch=master)](https://travis-ci.com/nai888/langua)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c594056d0f96442cba7a92fe2c348d92)](https://app.codacy.com/app/nai888/langua?utm_source=github.com&utm_medium=referral&utm_content=nai888/langua&utm_campaign=Badge_Grade_Dashboard)
[![Codacy Coverage Badge](https://api.codacy.com/project/badge/Coverage/58bcc4dc2f914f06ad6cc51658678dc3)](https://www.codacy.com/app/Langua/langua?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=nai888/langua&amp;utm_campaign=Badge_Coverage)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=nai888/langua)](https://dependabot.com)
[![Beerpay](https://beerpay.io/nai888/langua/badge.svg?style=flat)](https://beerpay.io/nai888/langua)

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

LanguaMorph is a tool for modeling historical sound change according to arbitrary rules of phonetic change. It can also be used to reverse historical sound change according to those same rules in order to guess at a word's proto-language roots.

### Deriv

LanguaDeriv is a tool for modeling word derivation according to arbitrary rules of morphosyntactics.

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
1. Open `Router.js` and change `<BrowserRouter basename={'/langua'}>` to  `<BrowserRouter basename={'/yoursubfolder'}>`.
1. Build the project with `yarn build`.
1. Copy the contents of the resulting /build folder into the appropriate subfolder on your server. You're done!

### Deployment to Root

If you are installing Langua in a website's root (e.g. a URL that ends in `.com`, `.org`, or similar):

1. Download and unpack the [latest release](../../releases/latest).
1. Install the dependencies with `yarn`.
1. Open `Router.js` and remove the `basename` prop by changing `<BrowserRouter basename={'/langua'}>` to  `<BrowserRouter>`.
1. Build the project with `yarn build`.
1. Copy the contents of the resulting /build folder into the root of your server. You're done!

## Versioning

Langua uses an unstable Master branch. The master branch is used for development, while stable versions are provided as releases. Version numbering is similar to [Semantic Versioning](http://semver.org/); versions are listed as x.y.z., wherein z refers to bug fixes and very minor updates, y refers to minor additions and updates to functionality, and x refers to major updates or overhauls to the program that significantly impact workflow or the use of the program.

For a full list of all changes made in each version of Langua, see the [Changelog](./CHANGELOG.md).

## Development Roadmap

- [x] **v0.0.x:** Building the architecture of the site.
- [x] **v0.1.x:** Building the [Gen](#gen) tool; bug fixes and other small updates.
- [ ] **v0.2.x:** [Gen](#gen) tool basic functionality working; building the [Frequen](#frequen) tool; bug fixes and other small updates.
- [ ] **v0.3.x:** [Gen](#gen) and [Frequen](#frequen) tools basic functionality working; building the [Morph](#morph) tool; bug fixes and other small updates.
- [ ] **v0.4.x:** [Gen](#gen), [Frequen](#frequen), and [Morph](#morph) tools basic functionality working; building the [Deriv](#deriv) tool; bug fixes and other small updates.
- [ ] **v0.5.x:** [Gen](#gen), [Frequen](#frequen), [Morph](#morph), and [Deriv](#deriv) tools basic functionality working; building the [Tree](#tree) tool; bug fixes and other small updates.
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

Thank you to [Travis CI](https://travis-ci.com), [BrowserStack](https://www.browserstack.com), [Dependabot](https://dependabot.com), and [Codacy](https://www.codacy.com/) for offering free services to open source projects!

[![Travis CI](./Logo%20Travis%20CI.png)](https://travis-ci.com "Travis CI")
[![BrowserStack](./Logo%20BrowserStack.png)](https://www.browserstack.com "BrowserStack")

## License

Langua is licensed under the [GNU Affero General Public License v3.0](https://choosealicense.com/licenses/agpl-3.0/).

## Support on Beerpay
Want to support continued work on Langua? Help me out with a couple of :beers:!

[![Beerpay](https://beerpay.io/nai888/langua/badge.svg?style=beer)](https://beerpay.io/nai888/langua)
[![Beerpay](https://beerpay.io/nai888/langua/make-wish.svg?style=flat)](https://beerpay.io/nai888/langua)
