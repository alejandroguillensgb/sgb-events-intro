'use strict';

angular.module('sgb-events-intro', ['megazord'])
    .controller('sgb-events-intro-controller', ['$scope', '_router', '_screen', '_screenParams','Contact','$appLoader','$timeout',
    	function ($scope, _router, _screen, _screenParams, Contact, $appLoader, $timeout) {
        	_screen.initialize($scope, _screenParams);

            $appLoader.show();
            $scope.params = _screenParams; 

            $scope.enterApp = function(){
            	_router.fireEvent({
            		name: 'goToSessions'
            	})
            };

            Contact.all().then(function(data){
                $scope.loginInfo = data;
                $timeout(function(){
                    $appLoader.hide();
                }, 1000);
            }).catch(function(result) {
               $timeout(function(){
                    $appLoader.hide();
                }, 1000);
            });

            $scope.openURL = function(url){
                window.open(url, '_system', 'location=yes'); 
                return false; 
            };	

        //Add your controller logic here.
    }]);