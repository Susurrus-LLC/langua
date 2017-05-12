# Langua

**Current Version:** v0.0.1

## Overview

Langua is a suite of language tools that can be used for testing, experimentation, learning, analysis, or creation. There are four main tools: [Gen](#gen), [Morph](#morph), [Deriv](#deriv), and [Frequen](#frequen).

### Gen

LanguaGen is a tool for automatically building a set of words based on arbitrary rules of phonotactics.

### Morph

LanguaMorph is a tool for modeling historical sound change according to arbitrary rules of phonetic change. It can also be used to reverse historical sound change according to those same rules in order to guess at a word's proto-language roots.

### Deriv

LanguaDeriv is a tool for modeling word derivation according to arbitrary rules of morphosyntactics.

### Frequen

LanguaFrequen is a tool for analyzing phoneme frequencies in a given text.

## Deployment

Langua is a web-based tool. The user interface is constructed using PHP, so it needs to be run on a server that can handle PHP.

Langua does not use a database, so it is extremely easy to install. Simply download the latest stable release and unpack it onto a server that will run it as a website.

## Versioning

Langua uses an unstable Master branch. The master branch is used for development, while stable versions are provided as releases. Version numbering is similar to [Semantic Versioning](http://semver.org/); versions are listed as x.y.z., wherein z refers to bug fixes and very minor updates, y refers to minor additions and updates to functionality, and x refers to major updates or overhauls to the program that significantly impact workflow or the use of the program.

**Note: Langua is currently under development and no stable release is yet ready.**

## Authors

- [Ian A. Cook](https://github.com/nai888)

See also the list of [people who have contributed](https://github.com/nai888/langua/graphs/contributors) to this project.

## Acknowledgments

Langua was inspired by a few existing tools, including:

- [Awkwords](http://akana.conlang.org/tools/awkwords/)
- [Gen](http://www.zompist.com/gen.html)
- [SCA2](http://www.zompist.com/sca2.html)
- [ConWorkShop PhoMo](http://conworkshop.info/phomo.php)
- [The Derivizer](http://akana.conlang.org/tools/derivizer.html)
- [The Frequentizer](http://akana.conlang.org/tools/frequentizer.html)

## License

Langua is licensed under the [GNU Affero General Public License v3.0](https://choosealicense.com/licenses/agpl-3.0/).
