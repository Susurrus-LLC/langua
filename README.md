# Langua

1. [Overview](#overview)
1. [Deployment](#deployment)
1. [Versioning](#versioning)
1. [Development Roadmap](#development-roadmap)
1. [Contributing](#contributing)
1. [Authors](#authors)
1. [Acknowledgments](#acknowledgments)
1. [License](#license)

## Overview

Langua is a suite of language tools that can be used for testing, experimentation, learning, analysis, or creation. There are several main tools: [Gen](#gen), [Morph](#morph), [Deriv](#deriv), [Frequen](#frequen), and [Tree](#tree).

### Gen

LanguaGen is a tool for automatically building a set of words based on arbitrary rules of phonotactics.

### Morph

LanguaMorph is a tool for modeling historical sound change according to arbitrary rules of phonetic change. It can also be used to reverse historical sound change according to those same rules in order to guess at a word's proto-language roots.

### Deriv

LanguaDeriv is a tool for modeling word derivation according to arbitrary rules of morphosyntactics.

### Frequen

LanguaFrequen is a tool for analyzing phoneme frequencies in a given text.

### Tree

LanguaTree is a tool for drawing and labeling syntax trees.

## Deployment

Langua is a web-based tool built on JavaScript, and it does not use a database, so it can be installed almost anywhere without need for running a back-end server.

- If you are installing in a website's root (e.g. a URL that ends in `.com`, `.org`, or similar), simply download and unpack the latest stable release onto the web server.
- If you are installing in a subfolder (e.g. `*.com/langua/`), you will need to download the source files, change the basename for the router, and create a new build.
  1. Open `index.js`.
  1. Add the prop `basename={'/yoursubfolder'}` to the `<BrowserRouter>`. For example, if you are deploying to `*.com/langua/`, BrowserRouter should read `<BrowserRouter basename={'/langua'}>`.
  1. Create a new build by running `yarn build`.
  1. Copy all of the files from the /build folder and deploy them onto the web server.

**Note: Langua is currently under development and no stable release is yet ready.**

## Versioning

Langua uses an unstable Master branch. The master branch is used for development, while stable versions are provided as releases. Version numbering is similar to [Semantic Versioning](http://semver.org/); versions are listed as x.y.z., wherein z refers to bug fixes and very minor updates, y refers to minor additions and updates to functionality, and x refers to major updates or overhauls to the program that significantly impact workflow or the use of the program.

## Development Roadmap

- [x] **v0.0.x:** Building the architecture of the site.
- [ ] **v0.1.x:** Building the [Gen](#gen) tool; bug fixes and other small updates.
- [ ] **v0.2.x:** Building the [Morph](#morph) tool; [Gen](#gen) tool functional; bug fixes and other small updates.
- [ ] **v0.3.x:** Building the [Deriv](#deriv) tool; [Morph](#morph) tool functional; bug fixes and other updates.
- [ ] **v0.4.x:** Building the [Frequen](#frequen) tool; [Deriv](#deriv) tool functional; bug fixes and other updates.
- [ ] **v0.5.x:** Building the [Tree](#tree) tool; [Frequen](#frequen) tool functional; bug fixes and other updates.
- [ ] **v1.x.x:** All tools functional; bug fixes and ongoing development.

## Contributing

Please review the [contributing guidelines](https://github.com/nai888/langua/blob/master/.github/CONTRIBUTING.md) before contributing.

## Authors

- [Ian A. Cook](https://github.com/nai888)

See also the list of [people who have contributed](https://github.com/nai888/langua/graphs/contributors) to this project.

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
