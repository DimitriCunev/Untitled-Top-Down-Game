let centerx,centery
function setup(){
    createCanvas(windowWidth,windowHeight)
    centerx = width/2
    centery = height/2
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight)
}

function draw(){
    background(255)
    drawDev()
    updateGameObjects()
    checkInput()

}
