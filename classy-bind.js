// Generated by CoffeeScript 1.8.0
(function() {
  var bind_module;

  bind_module = angular.module('classy-bind', ['classy.core']);

  bind_module.classy.plugin.controller({
    name: 'bind',
    options: {
      enabled: true
    },
    isActive: function(klass, deps) {
      if (this.options.enabled && angular.isObject(klass.bind)) {
        if (!deps.$element) {
          throw new Error("You need to inject `$element` to use the watch object");
          return false;
        }
        return true;
      }
    },
    postInit: function(klass, deps, module) {
      var fn, key, _ref;
      if (!this.isActive(klass, deps)) {
        return;
      }
      _ref = klass.bind;
      for (key in _ref) {
        fn = _ref[key];
        deps.$element.bind(key, angular.bind(klass, fn));
      }
    }
  });

}).call(this);
