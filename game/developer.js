function drawDev(){
    drawGrid()
    drawFPS()
}

function drawGrid(){
    stroke('rgba(0,0,0,0.4)')
    strokeWeight(1.7)
    let dx = width/20
    for (let i = 0; i < 20; i++) {
        line(dx*i,0,dx*i,height)
    }
    let dy = height/20
    for (let i = 0; i < 20; i++) {
        line(0,dy*i,width,dy*i)
    }
    stroke(255);strokeWeight(1)
}

function drawFPS(){
    textSize(15)
    textAlign(LEFT, CENTER)
    text(round(frameRate()),25,25)
}




