(function (window){
  var speakhello = {};
  var greeting = "Hello";speakhello.speak=
    function(name){
    console.log(greeting + " " + name);
  }
  window.speakhello = speakhello;})(window);
