class Ball {
    
    private speedX : number
    private speedY : number
    private xPos : number = 0
    private yPos : number= 0
    private ball : HTMLElement
    
    constructor() {
        this.ball = document.createElement("ball")
        document.body.appendChild(this.ball)

        this.speedX = 8
        this.speedY = 8

        this.update()
    }
    
    public update() : void {
        this.xPos += this.speedX
        this.yPos += this.speedY

    
        this.ball.style.transform = `translate(${this.xPos}px, ${this.yPos}px)`
    }
}