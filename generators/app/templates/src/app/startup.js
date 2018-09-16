import ko from 'knockout';
import './bindings';
import router from './router';

const components_names = [
  'home',
  'login'
];

components_names.map(component_name => {
  ko.components.register(component_name, require(`../components/${component_name}/${component_name}`).default);
});

router.start();

ko.applyBindings({ current_route: router.current_route });
