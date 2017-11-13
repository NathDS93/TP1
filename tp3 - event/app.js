/*jshint esversion: 6*/
var app = (function() {
  "use strict";

  var arr = [], element;

  const observer = function() {
    element = document.getElementById("my_input");
    document.getElementById("my_btn").onclick = action1;
  };

  const action1 = function(evt) {
    arr.push(element.value);
    console.log(arr);
    document.getElementById('my_list').innerHTML += "<li id=\"item_" + arr.length + "\">" + element.value + "</li>";
    element.value = "";
    element.focus();
  };

  window.onload = observer;

  }());
