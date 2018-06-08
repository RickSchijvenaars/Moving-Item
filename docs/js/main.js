"use strict";
var Ball = (function () {
    function Ball() {
        this.xPos = 0;
        this.yPos = 0;
        this.ball = document.createElement("ball");
        document.body.appendChild(this.ball);
        this.speedX = 8;
        this.speedY = 8;
        this.update();
    }
    Ball.prototype.update = function () {
        this.xPos += this.speedX;
        this.yPos += this.speedY;
        this.ball.style.transform = "translate(" + this.xPos + "px, " + this.yPos + "px)";
    };
    return Ball;
}());
var Game = (function () {
    function Game() {
        this.ball = new Ball();
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.ball.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map