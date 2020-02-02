function draw(canvasId, color, width, height){
    var c = document.getElementById(canvasId)
    var ctx = c.getContext("2d")
    ctx.fillStyle = color
    ctx.fillRect(0, 0, width, height)
}

draw('myCanvas', 'blue', 200, 100)

