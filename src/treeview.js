/**!
 * @name angular-treeview
 * @description Treeview for AngularJS users
 * @author miclay
 * @example https://github.com/miclay/angular-treeview
 */
(function() {
	'use strict';

	var isNonEmptyArray=function(obj){
		return (typeof obj=='object') && obj.length
	};
	
	angular.module('treeview',[])
	.directive('treeview',['$compile',function($compile){ 
		var treeTmpl=
		'<dl ng-repeat="node in treeModel" ng-if="isNodes(treeModel)">\
			<dt ng-click="selectNode(node,$event.target)" node-id="{{node.id}}">{{node.text}}</dt>\
			<dd treeview tree-model="node.children" ng-hide="node.expended==false"></dd>\
		</dl>';

		return {
			restrict:'EA',
			scope:{
				treeModel:'='
			},
			controller:['$scope','$element','$attrs',
				function(scope,element,attrs){

				$compile(treeTmpl)(scope,function(copy){
					element.html('').append(copy);
				});

				scope.isNodes=function(model){
					return isNonEmptyArray(model);
				};

				scope.selectNode=function(node,target){
					console.log(angular.element(target).scope().$id);
					var children=node.children;
					if(children&&children.length){
						
						//toggle display
						node.expended=(node.expended==false);
					}
				};

			}]
		};

	}]);
})();