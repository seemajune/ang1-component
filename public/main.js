var componentApp = angular.module('componentApp', []);

componentApp.controller('mainController', function($scope) {
    $scope.assignments = [
        {
            "title": "MCAT Assignment 1",
            "subtitle":"Watch Orientation Video"
        },
        {
            "title": "MCAT Assignment 2",
            "subtitle": "MCAT Diagnostic Exam"
        },
        {
            "title": "MCAT Assignment 3",
            "subtitle": "Science Assessments"
        },
        {
            "title": "MCAT Assignment 4",
            "subtitle": "Important Welcome Message"
        },
        {
            "title": "MCAT Assignment 5",
            "subtitle": "How to Access your  MCAT Flashcard App"
        },
        {
            "title": "MCAT Assignment 6",
            "subtitle": "How to Access a Digital Version of your MCAT Review Books"
        },
        {
            "title": "MCAT Assignment 7",
            "subtitle": "Information About your Higher Score Guarantee"
        }
    ];
})

componentApp.component('card', {

    bindings: {
        assignment: "<" //one-way data binding, just read from parent
    },
    controller: function() {
        this.handleButtonClick = function(){
            console.log("clicked");
        }
    },
    template: `
    <div class="card card__details">
    <h2>{{$ctrl.assignment.title}}</h2>
    <div class="card__summary">
    <p>{{$ctrl.assignment.subtitle}}</p>
    </div>
    <button class="btn btn__watch" ng-click="$ctrl.handleButtonClick()">watch</button>
    `
});
