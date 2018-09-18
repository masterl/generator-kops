# generator-kops

Yeoman generator for [KOPS](https://github.com/masterl/kops)

## Installation

First, install [Yeoman](http://yeoman.io) and generator-kops using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-kops
```

### To create your project

```bash
yo kops <project-name>
```

*`<project-name>` will be the folder where the project structure will be generated*

---

### To generate a new knockout component

***Note: make sure you are on the project root directory***

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

## TODOs

- [X] Accept project name via argument or via prompt
- [X] Generate package.json according to user input
  - [X] Set name
  - [X] Set version
  - [X] Set description
  - [X] Set keywords
  - [X] Set author
  - [X] Set license
  - [X] Remove fields
     - [X] homepage
     - [X] bugs
     - [X] repository
- [ ] Remove LICENSE file
- [X] Fix private methods names (prepend \_)

## License

MIT © [Leonardo de Oliveira Lourenço]()

[npm-image]: https://badge.fury.io/js/generator-kops.svg
[npm-url]: https://npmjs.org/package/generator-kops
