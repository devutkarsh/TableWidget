
function addAllColumnHeaders(myList, selector)
{	
	//alert("creating headers");
    var columnSet = [];
    var headerTr$ = $('<tr/>');
	var aStart = '<a href="#" ng-click="orderByField=\'';
	var aMid = '\'; reverseSort = !reverseSort">';
	var aEnd = '</a>';

    for (var i = 0 ; i < myList.length ; i++) {
        var rowHash = myList[i];
        for (var key in rowHash) {
			keyLink = aStart+key+aMid+key+aEnd;
			//alert(keyLink);
            if ($.inArray(key, columnSet) == -1){
                columnSet.push(key);
                headerTr$.append($('<th/>').html(keyLink));
            }
        } 
    }
    $(selector).append(headerTr$);
    return columnSet;
}

function createAngularTableDataPlaceholder(myList, selector)
{
    var columnSet2 = [];
    var headerTr2$ = $('<tr/>').attr('ng-repeat','field in myList|orderBy:orderByField:reverseSort');
	var aStart2 = '<td>';
	var amid2 = '{{field.';
	var aEnd2 = '}}</td>';

    for (var i = 0 ; i < myList.length ; i++) {
        var rowHash2 = myList[i];
        for (var key2 in rowHash2) {
			keyLink2 = aStart2+amid2+key2+aEnd2;
			
            if ($.inArray(key2, columnSet2) == -1){
                columnSet2.push(key2);
                headerTr2$.append($('<td/>').html(keyLink2));
            }
        }
    }

    $(selector).append(headerTr2$);

    return columnSet2;
}
addAllColumnHeaders(myList, headerSelector);
createAngularTableDataPlaceholder(myList, bodySelector);


	var app = angular.module('tableWidget', []);

		app.controller('tableController', ['$scope', '$window', function($scope, $window) {		
				$scope.orderByField = $window.orderByField;
				$scope.reverseSort = false;
				$scope.myList = $window.myList;
							
		}]);

	$(window).scroll(function(event) {
   $("#thead").css("left", -$(document).scrollLeft());
});

	

			$(function() {

		$(window).on('wheel', function(e) {

			var delta = e.originalEvent.deltaY;

			if (delta > 0) $('#thead').css('position','fixed');
			else $('#thead').css('position','relative');

			return true; 
		});
		});

