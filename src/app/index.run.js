(function() {
  'use strict';

  angular
    .module('angularGulpPractice')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
