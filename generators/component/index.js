const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts);

    this.argument(
      'component_name',
      {
        type:     String,
        required: true,
        desc:     'The component name'
      }
    );
  }

  writing () {
    this._copy_component_script();
    this._copy_component_template();
    this._copy_component_style();
  }

  _copy_component_script () {
    const component_name = this.options.component_name;

    const component_path = this.get_component_path(component_name);

    const model_name = this.get_model_name(component_name);

    this.fs.copyTpl(
      this.templatePath('script.js'),
      this.destinationPath(`${component_path}.js`),
      {
        component_name,
        model_name
      }
    );
  }

  _copy_component_template () {
    const component_name = this.options.component_name;

    const component_path = this.get_component_path(component_name);

    const class_name = this.get_class_name(component_name);

    this.fs.copyTpl(
      this.templatePath('template.pug'),
      this.destinationPath(`${component_path}.pug`),
      {
        component_name,
        class_name
      }
    );
  }

  _copy_component_style () {
    const component_name = this.options.component_name;

    const component_path = this.get_component_path(component_name);

    const class_name = this.get_class_name(component_name);

    this.fs.copyTpl(
      this.templatePath('style.styl'),
      this.destinationPath(`${component_path}.styl`),
      {
        class_name
      }
    );
  }

  get_model_name (component_name) {
    return component_name.match(/[0-9a-zA-Z]+/g)
      .map(part => this.capitalize_first(part))
      .join('');
  }

  capitalize_first (str) {
    const letters = str.split('');

    letters[0] = letters[0].toUpperCase();

    return letters.join('');
  }

  get_component_path (component_name) {
    return `src/components/${component_name}/${component_name}`;
  }

  get_class_name (component_name) {
    return component_name;
  }
};
