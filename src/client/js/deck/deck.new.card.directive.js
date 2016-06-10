(function() {

 'use strict'

  angular
  .module('studyApp')
  .directive('moreCards', moreCards)

  function moreCards() {
    var directive = {
      restrict: 'AE',
      template: `
        <div>
          <br>
          <div class="form-group">
            <input ng-model="cards[index].question" placeholder="Question" class="form-control" type="text" required>
          </div>
          <div class="form-group">
            <input ng-model="cards[index].answer" placeholder="Answer" class="form-control" type="text" required>
          </div>
        </div>`,
      replace: true,
      transclude: false,
      scope: {
        index: '=',
        cards: '='
      }
    }
    return directive;
  }

})();