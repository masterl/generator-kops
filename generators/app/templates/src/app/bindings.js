import ko from 'knockout';

// Define custom bindings here as the doc says:
//
// ko.bindingHandlers.yourBindingName = {
//   init: (element, valueAccessor, allBindings, viewModel, bindingContext) => {
//     // This will be called when the binding is first applied to an element
//     // Set up any initial state, event handlers, etc. here
//   },
//   update: (element, valueAccessor, allBindings, viewModel, bindingContext) => {
//     // This will be called once when the binding is first applied to an element,
//     // and again whenever any observables/computeds that are accessed change
//     // Update the DOM element based on the supplied values here.
//   }
// };

ko.bindingHandlers.numeric = {
  init: (element, valueAccessor) => {
    element.onkeyup = () => {
      element.value = element.value.replace(/[^0-9]/g, '');

      valueAccessor()(element.value);
    };
  }
};
