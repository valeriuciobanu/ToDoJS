var main = function() {
  'use strict';

  var addTodo = function () {
    var $newTask = $("<li>"),
    $inputValue = $(".task-input input").val();

    if ($(".task-input input").val() !== "") {
      $newTask.addClass("animated bounceIn");
      $newTask.text($inputValue); //Assign the value of input to $newTask
      $newTask.hide();
      $(".task-list").append($newTask); //Append to list
      $newTask.fadeIn();
      $(".task-input input").val("");  //Clears input after submission
    }
  };

  $(".task-input button").on("click", function(event) {
    $(".empty-todo").remove();
    addTodo();
  });

  //Submits the entry on Enter keypress
  $(".task-input input").on("keypress",function(event) {
    if (event.keyCode === 13) {
      $(".empty-todo").remove();
      addTodo();
    }
  });
};

$(document).ready(main);