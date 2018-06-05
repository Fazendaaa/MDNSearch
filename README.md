# MDN Search Docs
A NPM package that searches the [Mozilla Developer Network](https://developer.mozilla.org/) website.

<div align = "center">
    <br>
    <img src="./others/img/logo/logo.png" height=260>
    <br>

[![Say Thanks!](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg?longCache=true&style=for-the-badge)](https://saythanks.io/to/Fazendaaa)

[![English README](https://img.shields.io/badge/Language-EN-blue.svg?longCache=true&style=for-the-badge)](./README.md)
[![Portuguese README](https://img.shields.io/badge/Linguagem-PT-green.svg?longCache=true&style=for-the-badge)](./docs/readme/README_PT.md)

[![npm](https://img.shields.io/npm/v/mdn-search-docs.svg?style=flat-square)](https://www.npmjs.com/package/mdn-search-docs)
[![Build Status](https://travis-ci.org/Fazendaaa/MDNSearch.svg?branch=master)](https://travis-ci.org/Fazendaaa/MDNSearch)
[![Coverage Status](https://coveralls.io/repos/github/Fazendaaa/MDNSearch/badge.svg?branch=master)](https://coveralls.io/github/Fazendaaa/MDNSearch?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/c6069aecd89bb086265c/maintainability)](https://codeclimate.com/github/Fazendaaa/MDNSearch/maintainability)
[![Known Vulnerabilities](https://snyk.io/test/github/fazendaaa/MDNSearch/badge.svg?targetFile=package.json)](https://snyk.io/test/github/fazendaaa/MDNSearch?targetFile=package.json)

</div>

## About
A simple way of searching MDN content. I just wrote this package to be more complete for what I need -- see what I mean in [MDNSearchBot](https://github.com/Fazendaaa/MDNSearchBot).

# How to use it

* searchMDN ( { __term__: _string_ | _Array<_string_>_; __page__?: _number_; __locale__?: _string_; __topics__?: _string_ | _Array<_string_>_; })
* __locale__: remember that should be in the following format: _"language-COUNTRY"_

Example:

``` typescript
import { searchMDN } from 'mdn-search-docs';

searchMDN({ term: 'Array' }).then(console.log);
searchMDN({ term: 'Array', locale: 'pt-BR' }).then(console.log);

const searched = await searchMDN({ term: 'Array', page: 2 });
```

## Testing
There's a [Travis CI](http://travis-ci.org/) integration and I've written all the testing with [Jest](https://facebook.github.io/jest/).

## Code
Plain and simple [Typescript](http://typescriptlang.org/) and the [Microsoft linter standards](https://github.com/Microsoft/tslint-microsoft-contrib) for it.

# Contributing
Just talk to me through opening a issue.

# Versioning
Just using plain and simple npm version. See the badge at the top of this readme. 

# TODO
Since I will be keeping this README up to date with any major change and I don't use any versioning system to log all the fixed bugs or previous projects updates, you can still have a taste of what comes next and what is being under analysis right in the [Projects](https://github.com/Fazendaaa/MDNSearch/projects/) tab.

# Authors
* Only [me](https://github.com/Fazendaaa) for now.

Consider buy me a coffee:

[![Buy Me a Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/Fazenda)

Or even becoming a patron:

[![Patreon](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/Fazenda/overview)

# License
Like many Open-Source Software (OSS) the MIT license is used, more about it in [LICENSE](https://github.com/Fazendaaa/MDNSearch/blob/master/LICENSE).
