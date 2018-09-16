import ko from 'knockout';
import template from './<%= component_name %>.pug';

class <%= model_name %>Model {
  constructor (params) {
    this.value = ko.observable('some value');
  }
}

export default { viewModel: <%= model_name %>Model, template };
