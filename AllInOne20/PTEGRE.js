/// <reference path="C:\Users\spuser.VTSLINDIA\Desktop\sampath\AllInOne20\AllInOne20\scripts/angular.js" />
var app = angular.module("MypageInfo", ['ngFileUpload']);
app.controller("MypageController", function ($scope, $http, $window, Upload) {



    $scope.Insert = function (S) {


        alert("Hi");

        $http({
            method: "POST",
            url: "/Register/Index",
            data: S,
            dataType: 'json',
            headers: { "Content-Type": "application/json" }
        })
    }

    $scope.UploadFiles = function (files) {



        $scope.SelectedFiles = files;


        if ($scope.SelectedFiles && $scope.SelectedFiles.length) {
            Upload.upload({
                url: '/Register/ImagOne',
                data: {
                    files: $scope.SelectedFiles
                }


            }).
            then(function (response) {
             
                $scope.S = {
                    IELTSPTEImage: response.data
                }
             
                console.log($scope.S.IELTSPTEImage);

            })

        }

    }








    $scope.UploadFiles1 = function (files) {
      
      
    
        $scope.SelectedFiles1 = files;
  

        if ($scope.SelectedFiles1 && $scope.SelectedFiles1.length) {
            Upload.upload({
                url: '/Register/ImagSecond',
                data: {
                    PGorGraduateImage: $scope.SelectedFiles1
                }
            }).
            then(function (response) {
             
                $scope.S = {
                    PGorGraduateImage: response.data
                }
              
                console.log($scope.S.PGorGraduateImage);

            })
        }
    }

    $scope.UploadFiles2 = function (files) {
    
  
        $scope.SelectedFiles2 = files;
        

        if ($scope.SelectedFiles2 && $scope.SelectedFiles2.length) {
            Upload.upload({
                url: '/Register/ImagThree',
                data: {
                    files: $scope.SelectedFiles2
                }
            }).
             then(function (response) {
              
                 $scope.S = {
                     event: response.data
                 }
               
                 console.log($scope.S.SSCINTERImage);

             })
        }
    }

    $scope.Show = function () {
        alert("Show")
        $http.get("/Register/Show").then(function (response) {
            $scope.GetDetails = response.data;
        })

        
    }

    $(document).ready(function () {
        $("#show").click(function () {
            $("#mytable").DataTable({
               
            });
        })
       
    });
   
})