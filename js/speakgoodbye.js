  
(function (window){
  var speakgoodbye = {};
  var greeting = "goodbye";speakgoodbye.speak=
    function(name){
    console.logo(greeting + name);
  }
  window.speakgoodbye = speakgoodbye;})(window);
