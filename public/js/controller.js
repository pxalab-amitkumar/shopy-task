var app = angular.module('mainApp', []);
app.controller('people', function ($scope, $http) {
    //my http link https://vast-headland-18946.herokuapp.com/router
    $http.get("http://localhost:3000/router")
        .success(function (response) {
            $scope.persons = response;
            

        });


    /* Post Data */
    $scope.submitData = function () {
        var date = $('#mydate').val();
        $scope.data.dob = date;        
        if ($scope.data.dob == '' || $scope.data.dob === null) {
            alert('Please Select the DOB');
        } else {



            $http.post("http://localhost:3000/router", $scope.data).success(function (res) {

               console.log(data);
                $scope.data = " ";
            });

        }

    }


    /*Watch Function*/
    /*Food*/
    $scope.$watch('data.food', function (newValue, oldValue) {
        if (newValue == 1) {
            $scope.food = 'Bad'
        } else if (newValue == 2) {
            $scope.food = 'Poor'
        } else if (newValue == 3) {
            $scope.food = 'Good'
        } else if (newValue == 4) {
            $scope.food = 'Average'
        } else if (newValue == 5) {
            $scope.food = 'Excellent'

        } else {
            $scope.food = 'Good'
        }
       
    });
    /*ambiance*/
    $scope.$watch('data.ambiance', function (newValue, oldValue) {
        if (newValue == 1) {
            $scope.ambiance = 'Bad'
        } else if (newValue == 2) {
            $scope.ambiance = 'Poor'
        } else if (newValue == 3) {
            $scope.ambiance = 'Good'
        } else if (newValue == 4) {
            $scope.ambiance = 'Average'
        } else if (newValue == 5) {
            $scope.ambiance = 'Excellent'

        } else {
            $scope.ambiance = 'Good'
        }
       
    });
    /*Servivce*/
    $scope.$watch('data.service', function (newValue, oldValue) {
        if (newValue == 1) {
            $scope.service = 'Bad'
        } else if (newValue == 2) {
            $scope.service = 'Poor'
        } else if (newValue == 3) {
            $scope.service = 'Good'
        } else if (newValue == 4) {
            $scope.service = 'Average'
        } else if (newValue == 5) {
            $scope.service = 'Excellent'

        } else {
            $scope.service = 'Good'
        }
        
    });
    /*pricing*/
    $scope.$watch('data.pricing', function (newValue, oldValue) {
        if (newValue == 1) {
            $scope.pricing = 'Bad'
        } else if (newValue == 2) {
            $scope.pricing = 'Poor'
        } else if (newValue == 3) {
            $scope.pricing = 'Good'
        } else if (newValue == 4) {
            $scope.pricing = 'Average'
        } else if (newValue == 5) {
            $scope.pricing = 'Excellent'

        } else {
            $scope.pricing = 'Good'
        }
        
    });
    /*end of Watch Function*/
    /* function for message*/
    $scope.$watch('data.message', function (newValue, oldValue) {

    });



});