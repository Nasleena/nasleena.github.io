  
(function (window){
  var speakgoodbye = {};
  var greeting = "goodbye ";speakgoodbye.speak=
    function(name){
    console.log(greeting + name);
  }
  window.speakgoodbye = speakgoodbye;})(window);
