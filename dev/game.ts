class Game {

    private ball : Ball

    constructor(){

        this.ball = new Ball()

        this.gameLoop()
    }

    private gameLoop():void{
        this.ball.update()      
        requestAnimationFrame(() => this.gameLoop())
    }
}

window.addEventListener("load", () => new Game())