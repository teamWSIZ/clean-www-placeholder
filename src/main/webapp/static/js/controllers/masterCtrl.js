angular.module('myApp.controllers',[]);

angular.module('myApp.controllers').controller('masterCtrl',
    ['$rootScope','$scope', '$http',
        function ($rootScope, $scope, $http) {
            //To jest uruchamiane przy każdym wejściu do widoku korzystającego z tego kontrolera
            //Lokalny obiekt modelu, tworzony przy każdym uruchomieniu kontrolera
            $scope.M = {};
            $scope.M.items = [
                {id:'1', title:'vult', body:'Deus! Deus vult!'},
                {id:'2', title:'vulta', body:'Deus! Deus vult!'},
                {id:'3', title:'karramba', body:'Lorem ipsum dolor sit'}
            ];
            $scope.M.sItem = $scope.M.items[0];

            $scope.ffilter = '';

            $scope.cleanItem = function () {
                $scope.sItem = {id: '0', title: '', body: ''};
            };

            $scope.sendNewItem = function() {
                return $http({
                    url: $rootScope.M.URL + '/items',
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    data: JSON.stringify($scope.newItem)
                    // ,
                    // params: any_object
                }).success(function(data){
                    alert('Send operation OK' + data);
                    $scope.loadArray();
                    $scope.cleanItem();
                    $scope.newItem = null;
                });
            };

            $scope.loadArray = function () {
                var url = $rootScope.M.URL + '/items';
                $http.get(url)
                    .success(function (data) {
                        $scope.M.items = data;
                        $scope.M.items.sort(function (a, b) {
                            return a.title.toLowerCase() > b.title.toLowerCase();
                        })
                    })
            };

            //functions executed on loading the view
            // $scope.loadArray();
            // $scope.cleanItem();

            console.log('items:' + $scope.M.items);

        }
    ]
);
