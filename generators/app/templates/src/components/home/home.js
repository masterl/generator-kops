import ko from 'knockout';
import template from './home.pug';

class HomeModel {
  constructor (params) {
    this.msg = ko.observable('Kops Home!');
  }
}

export default { viewModel: HomeModel, template };
