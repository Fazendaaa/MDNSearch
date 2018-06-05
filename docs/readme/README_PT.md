# MDNSearch
Um package do NPM que faz buscas no site da [Mozilla Developer Network](https://developer.mozilla.org/).

<div align = "center">
    <br>
    <img src="../../others/img/logo/logo.png" height=260>
    <br>

[![Say Thanks!](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg?longCache=true&style=for-the-badge)](https://saythanks.io/to/Fazendaaa)

[![English README](https://img.shields.io/badge/Language-EN-blue.svg?longCache=true&style=for-the-badge)](../../README.md)
[![Portuguese README](https://img.shields.io/badge/Linguagem-PT-green.svg?longCache=true&style=for-the-badge)](./README_PT.md)

[![npm](https://img.shields.io/npm/v/MDNSearch.svg?style=flat-square)](https://www.npmjs.com/package/MDNSearch)
[![Build Status](https://travis-ci.org/Fazendaaa/MDNSearch.svg?branch=master)](https://travis-ci.org/Fazendaaa/MDNSearch)
[![Coverage Status](https://coveralls.io/repos/github/Fazendaaa/MDNSearch/badge.svg?branch=master)](https://coveralls.io/github/Fazendaaa/MDNSearch?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/c6069aecd89bb086265c/maintainability)](https://codeclimate.com/github/Fazendaaa/MDNSearch/maintainability)
[![Known Vulnerabilities](https://snyk.io/test/github/fazendaaa/MDNSearch/badge.svg?targetFile=package.json)](https://snyk.io/test/github/fazendaaa/MDNSearch?targetFile=package.json)

</div>

## Sobre
Um jeito simples the fazer pesquisas de conteúdo no MDN. Eu apenas escrevi esse pacote para me ajudar em outro projeto -- veja qual é em [MDNSearchBot](https://github.com/Fazendaaa/MDNSearchBot).

# Como Utilizar

* searchMDN ( { __term__: _string_ | _Array<_string_>_; __page__?: _number_; __locale__?: _string_; __topics__?: _string_ | _Array<_string_>_; })
* __locale__: apenas se lembre de colocar no seguinte formato: _"language-COUNTRY"_

Examples:

``` typescript
import { searchMDN } from 'MDNSearch';

searchMDN({ term: 'Array' }).then(console.log);
searchMDN({ term: 'Array', locale: 'pt-BR' }).then(console.log);

const searched = await searchMDN({ term: 'Array', page: 2 });
```

## Testes
Há uma integração com [Travis CI](http://travis-ci.org/) que foram escritos com ajuda do [Jest](https://facebook.github.io/jest/).

## Code
[Typescript](http://typescriptlang.org/) com o padrão de linter da [Microsoft](https://github.com/Microsoft/tslint-microsoft-contrib).

# Contribuindo
Converse comigo através de uma issue.

# Versionamento
Utilizado a versão do npm. Veja o topo deste readme para mais informações sobre.

# Autores
* Apenas [eu](https://github.com/Fazendaaa) até agora.

Considere me comprar um café:

[![Buy Me a Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/Fazenda)

Ou até mesmo se tornar um padrinho:

[![Patreon](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/Fazenda/overview)

# Licença
Assim como muitos projetos de código livre, a licença MIT é utilizada aqui. Mais sobre em [LICENSE](https://github.com/Fazendaaa/MDNSearch/blob/master/LICENSE).
