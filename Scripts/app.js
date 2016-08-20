/// <reference path="objects/label.ts"/>
/// <reference path="objects/button.ts"/>
/**
 * FileName: app.js
 *
 * @author Tom Tsiliopoulos
 * @date August 3, 2016
 *
 * StudentID: 300818557
 *
 * @description This file is the main javascript file for the web site
 */
// IIFE - Immediately Invoked Function Expression
var core;
(function (core) {
    "use strict";
    var canvas;
    core.CANVAS_WIDTH = 320;
    core.CANVAS_HEIGHT = 320;
    var stage;
    var helloLabel;
    var yDirection = 1;
    var xDirection = 1;
    var dy = 1;
    var dx = 1;
    var clickMeButton;
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        canvas.setAttribute("width", "320");
        canvas.setAttribute("height", "320");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // enable mouse over events
        createjs.Ticker.framerate = 60; // 60 frames per second
        createjs.Ticker.on("tick", gameLoop); // call gameLoop every frame
        // after everything is set up - call main
        main();
    }
    /**
     * Utility Method to set the bounds of an object
     *
     * @param {number} axis
     * @param {number} boundary
     * @returns {number}
     */
    function checkBounds(axis, boundary) {
        if (axis >= boundary) {
            axis = boundary;
        }
        if (axis <= 0) {
            axis = 0;
        }
        return axis;
    }
    /**
     * Event method that triggers every frame
     *
     * @method gameLoop
     */
    function gameLoop() {
        //helloLabel.rotation += 5;
        // checkbounds for x and y
        helloLabel.x = checkBounds(helloLabel.x, core.CANVAS_WIDTH);
        helloLabel.y = checkBounds(helloLabel.y, core.CANVAS_HEIGHT);
        // change direction and speed for x and y
        if ((helloLabel.y == core.CANVAS_HEIGHT) || (helloLabel.y == 0)) {
            dy = Math.floor(Math.random() * 5) + 1;
            yDirection *= -1;
        }
        if ((helloLabel.x == core.CANVAS_WIDTH) || (helloLabel.x == 0)) {
            dx = Math.floor(Math.random() * 5) + 1;
            xDirection *= -1;
        }
        helloLabel.y += (yDirection * dy);
        helloLabel.x += (xDirection * dx);
        stage.update(); // refresh the stage container
    }
    function clickMeButton_clicked() {
        helloLabel.text = (helloLabel.text === "Catch Me If You Can") ? "Good Bye!" : "Catch Me If You Can";
    }
    // everything happens here
    function main() {
        // label object
        helloLabel = new objects.Label("Hello World!", "40px Consolas", "#000000", core.CANVAS_WIDTH * 0.5, core.CANVAS_HEIGHT * 0.5, true);
        stage.addChild(helloLabel);
        // button bitmap
        clickMeButton = new objects.Button("../Assets/images/clickMeButton.png", core.CANVAS_WIDTH * 0.5, core.CANVAS_HEIGHT * 0.5, true);
        stage.addChild(clickMeButton);
        clickMeButton.on("click", clickMeButton_clicked);
    }
    function clock(){
  var now = new Date();
  var ctx = document.getElementById('canvas1').getContext('2d');
  ctx.save();
  ctx.clearRect(0,0,150,150);
  ctx.translate(75,75);
  ctx.scale(0.4,0.4);
  ctx.rotate(-Math.PI/2);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";

  // Hour marks
  ctx.save();
  for (var i=0;i<12;i++){
    ctx.beginPath();
    ctx.rotate(Math.PI/6);
    ctx.moveTo(100,0);
    ctx.lineTo(120,0);
    ctx.stroke();
  }
  ctx.restore();

  // Minute marks
  ctx.save();
  ctx.lineWidth = 5;
  for (i=0;i<60;i++){
    if (i%5!=0) {
      ctx.beginPath();
      ctx.moveTo(117,0);
      ctx.lineTo(120,0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI/30);
  }
  ctx.restore();

  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr  = now.getHours();
  hr = hr>=12 ? hr-12 : hr;

  ctx.fillStyle = "black";

  // write Hours
  ctx.save();
  ctx.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec )
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20,0);
  ctx.lineTo(80,0);
  ctx.stroke();
  ctx.restore();

  // write Minutes
  ctx.save();
  ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28,0);
  ctx.lineTo(112,0);
  ctx.stroke();
  ctx.restore();

  // Write seconds
  ctx.save();
  ctx.rotate(sec * Math.PI/30);
  ctx.strokeStyle = "#D40000";
  ctx.fillStyle = "#D40000";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30,0);
  ctx.lineTo(83,0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0,0,10,0,Math.PI*2,true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95,0,10,0,Math.PI*2,true);
  ctx.stroke();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.arc(0,0,3,0,Math.PI*2,true);
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = '#325FA2';
  ctx.arc(0,0,142,0,Math.PI*2,true);
  ctx.stroke();

  ctx.restore();

  window.requestAnimationFrame(clock);
}
window.requestAnimationFrame(clock);
    // call init funciton when window finishes loading
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map
