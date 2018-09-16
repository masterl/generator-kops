# generator-kops

Yeoman generator for [KOPS](https://github.com/masterl/kops)

## Installation

First, install [Yeoman](http://yeoman.io) and generator-kops using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-kops
```

Then generate your new project:

```bash
yo kops <project-name>
```

*`<project-name>` will be the folder where the project structure will be generated*

---

To generate new components:

**make sure you are on the project root directory**

```
yo kops:component <component-name>
```

Example:

`yo kops:component nav-bar`

This will generate:

```
src/components/nav-bar/nav-bar.js
src/components/nav-bar/nav-bar.pug
src/components/nav-bar/nav-bar.styl
```

---

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Leonardo de Oliveira Lourenço]()

[npm-image]: https://badge.fury.io/js/generator-kops.svg
[npm-url]: https://npmjs.org/package/generator-kops
