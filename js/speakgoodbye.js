  
(function (window){
  var speakgoodbye = {};
  var greeting = "Good Bye";speakgoodbye.speak=
    function(name){
    console.log(greeting + " " + name);
  }
  window.speakgoodbye = speakgoodbye;})(window);
