// IIFE - Immediately Invoked Function Expression
(function() {
    let canvas = document.getElementById("canvas"); // hook into the canvas element
    let stage;
    let helloLabel;

    function Start() {
       stage = new createjs.Stage(canvas); // create a stage container
       createjs.Ticker.framerate = 60;
       createjs.Ticker.on("tick", Update); // call Update every frame
       Main();
    }

    // Game Loop - triggers every frame
    function Update() {
      helloLabel.rotation += 5;

      stage.update(); // refresh the stage
    }

    function Main() {
      console.log("Game Started");

      helloLabel = new createjs.Text("Hello, World", "40px Consolas", "#000000");
      helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
      helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
      helloLabel.x = 320;
      helloLabel.y = 240;
      stage.addChild(helloLabel);
    }

    window.onload = Start;
})();

