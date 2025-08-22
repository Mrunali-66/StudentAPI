var app = angular.module('restApiApp', []);

app.controller('MainController', function($scope) {
    const STORAGE_KEY = "students";

    // Load students from localStorage
    $scope.students = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    $scope.newStudent = {};
    $scope.editIndex = null;
    $scope.editStudentData = {};

    // Create operation - add student
    $scope.addStudent = function() {
        $scope.students.push(angular.copy($scope.newStudent));
        $scope.newStudent = {};
        saveToStorage();
    };

    // Update operation-
    $scope.updateStudent = function() {
        $scope.students[$scope.editIndex] = angular.copy($scope.editStudentData);
        $scope.editIndex = null;
        $scope.editStudentData = {};
        saveToStorage();
    };

    // Edit operation
    $scope.editStudent = function(index) {
        $scope.editIndex = index;
        $scope.editStudentData = angular.copy($scope.students[index]);
    };

    // Cancel edit
    $scope.cancelEdit = function() {
        $scope.editIndex = null;
        $scope.editStudentData = {};
    };
    // Delete operation
    $scope.deleteStudent = function(index) {
        $scope.students.splice(index, 1);
        saveToStorage();
    };
    // Save to localStorage
    function saveToStorage() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify($scope.students));
    }
});
