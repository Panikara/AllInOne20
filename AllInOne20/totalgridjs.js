/// <reference path="C:\Users\spuser.VTSLINDIA\Desktop\sampath\AllInOne20\AllInOne20\scripts/angular.js" />
var app = angular.module("totalgrid", []);
app.controller("mygridcontroller", function ($scope, $http) {
    $scope.ieltsimage = "";

    $http.get("/Register/Show").then(function (response) {
        $scope.GetDetails = response.data;
        
        console.log($scope.GetDetails)
    })
    $scope.IELTSImage = function () {
        alert("Image");
        $scope.image1ielts = true;
        $scope.imagedownload = true;
        $scope.pgCertificate = false;
        $scope.pgdownload = false;
    }

    
    $scope.Download = function (name) {
        alert(name);
        $http.get("/Register/Download?name=" + name).then(function (response) {

        })

        //$http({
        //    method: "POST",
        //    url: "/Register/Download",
        //    data:name,
            
        //})
    }

    $scope.PGGraduateCertificate = function () {
        $scope.image1ielts = false;
        $scope.imagedownload = false;
        $scope.pgCertificate = true;
        $scope.pgdownload = true;
    }
})