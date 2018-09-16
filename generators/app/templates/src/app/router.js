import ko from 'knockout';
import page from 'page';

const app_routes = [
  {
    url:       '',
    component: 'login'
  },
  {
    url:       'home',
    component: 'home'
  }
];

class Router {
  constructor (routes) {
    this.current_route = ko.observable({});

    this.apply_routes(routes);
  }

  start () {
    page({
      hashbang: true
    });
  }

  apply_routes (routes) {
    routes.map(route => this.apply_route(route));
  }

  apply_route (route) {
    page(route.url, ctx => this.update_current_route(route, ctx));
  }

  update_current_route (route, ctx) {
    this.current_route({
      component: route.component,
      params:    ctx.params
    });
  }

  redirect_to (path) {
    page.redirect(path);
  }
}

export default new Router(app_routes);
