﻿/// <reference path="C:\Users\spuser.VTSLINDIA\Desktop\sampath\AllInOne20\AllInOne20\scripts/angular.js" />
var app = angular.module("totalgrid", ['ngFileSaver']);
app.controller("mygridcontroller", function ($scope, $http) {
    $scope.ieltsimage = "";

    $http.get("/Register/Show").then(function (response) {
        $scope.GetDetails = response.data;
        
        console.log($scope.GetDetails)
    })

    $scope.Listofusers = true;

    

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

    $scope.SingleUserhide = false;
    $scope.SentEmail = function (email) {
        alert("pending")
        $http.get("/Register/EmailStatus?email=" + email).then(function (response) {
            if (email == response.data) {
                $scope.sbs = "Success";
               
            }
        })
           
            
       
    }

    $scope.View = function (SingleUserDetails) {
        alert("View");
        $scope.Listofusers = false;
        $scope.SingleUserhide = true;
        
        $scope.SingleUserInfo = SingleUserDetails;
        console.log($scope.SingleUserInfo);
    }


    $scope.DownloadPDF = function () {
        alert("PDF");
        
        var pdf = new jsPDF('p', 'pt', 'letter');

     

        pdf.text('Name: \t\t\t' + document.querySelector(`#inputName`).value, 15, 20)
        

        pdf.text('Last Name: \t\t\t' + document.querySelector(`#inputLName`).value, 15,40)

        pdf.text('Email: \t\t\t' + document.querySelector(`#inputEamil`).value, 15, 60)

        pdf.text('PhoneNumber: \t\t\t' + document.querySelector(`#inputPhoneNumber`).value, 15, 80)

        pdf.text('Alt Phone: \t\t\t' + document.querySelector(`#inputAltPhoneNumber`).value, 15, 100)


        var source = $('#singleuserpdf')[0];

        pdf.text(' \t\t\t' + document.querySelector(`#PGDegree`).value, 20, 220)

        pdf.text(' \t\t\t' + document.querySelector(`#Graduate`).value, 20, 300)

        pdf.text(' \t\t\t' + document.querySelector(`#InterDip`).value, 20, 370)

        pdf.text(' \t\t\t' + document.querySelector(`#ssc`).value, 20, 450)


        pdf.text(' \t\t\t' + document.querySelector(`#PGUniv`).value, 85, 220)

        pdf.text(' \t\t\t' + document.querySelector(`#GUniv`).value, 85, 300)

        pdf.text(' \t\t\t' + document.querySelector(`#IUniv`).value, 85, 370)

        pdf.text(' \t\t\t' + document.querySelector(`#SUniv`).value, 85, 450)


        pdf.text(' \t\t\t' + document.querySelector(`#PGPercentage`).value, 200, 220)

        pdf.text(' \t\t\t' + document.querySelector(`#GPercentage`).value, 200, 300)

        pdf.text(' \t\t\t' + document.querySelector(`#IPercentage`).value, 200, 370)

        pdf.text(' \t\t\t' + document.querySelector(`#SPercetage`).value, 200, 450)


        pdf.text(' \t\t\t' + document.querySelector(`#PGYear`).value, 330, 220)

        pdf.text(' \t\t\t' + document.querySelector(`#GYear`).value, 330, 300)

        pdf.text(' \t\t\t' + document.querySelector(`#IYear`).value, 330, 370)

        pdf.text(' \t\t\t' + document.querySelector(`#SYear`).value, 330, 450)

        pdf.text('IELTS\PTE ScoreCard:\t\t\t' + document.querySelector(`#pteielts`).value, 20, 550)


       


       

        specialElementHandlers = {
            // element with id of "bypass" - jQuery style selector
            '#bypassme': function (element, renderer) {
                // true = "handled elsewhere, bypass text extraction"
                return true
            }
        };
        margins = {
            top: 120,
            bottom: 60,
            left: 40,
            width: 522
        };

        pdf.fromHTML(
    source, // HTML string or DOM elem ref.
    margins.left, // x coord
    margins.top, { // y coord
        'width': margins.width, // max width of content on PDF
        'elementHandlers': specialElementHandlers
    },

    function (dispose) {
        // dispose: object with X, Y of the last line add to the PDF 
        //          this allow the insertion of new lines after html
        pdf.save('Test.pdf');
    }, margins);
    }

 


  

    $scope.BackToList = function () {
        alert("BackToList")
        $scope.Listofusers = true;
        $scope.SingleUserhide = false;
    }
   
})