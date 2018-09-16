import ko from 'knockout';
import template from './login.pug';
import router from 'app/router';

class LoginModel {
  constructor (params) {
    this.email = ko.observable('');
    this.password = ko.observable('');
  }

  login () {
    // check login

    router.redirect_to('home');
  }
}

export default { viewModel: LoginModel, template };
