//creating a new directive,
//directive method takes two parameters:
//name and array with dependencies and a function
//that returns a directive object 
angular.module('woodApp')
    .directive('woodFooter', [function () {           
        return {                                               
            templateUrl: 'templates/footer.html'          
        };                                                  
    }]);