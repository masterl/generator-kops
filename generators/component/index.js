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
    this.copy_component_script();
    this.copy_component_template();
    this.copy_component_style();
  }

  copy_component_script () {
    const component_name = this.options.component_name;

    const component_path = this.get_component_path(component_name);

    this.fs.copyTpl(
      this.templatePath('script.js'),
      this.destinationPath(`${component_path}.js`),
      {
        component_name,
        model_name: 'Testcomp'
      }
    );
  }

  copy_component_template () {
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

  copy_component_style () {
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

  get_component_path (component_name) {
    return `src/components/${component_name}/${component_name}`;
  }

  get_class_name (component_name) {
    return component_name;
  }
};
