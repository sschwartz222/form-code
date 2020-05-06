function setup() {
  createCanvas(innerWidth, innerHeight)
  background(255, 0 , 0)

}

let x = 0
let i = 0
let c = 0
let offsetX = 0
let offsetY = 0

function draw() {
  background(255, 0 , 0, 5)
  if (c===1) {
    let r = 50
    let x = i*6 + offsetX
    let y = sin(i*0.5) * r + offsetY
    let d = 30
    ellipse(x,y,d)
    i+=0.55

  }else{
    i=0
    background(255, 0 , 0)
  }
  
}

function mouseClicked(){
  if (c===0) c = 1
  else c = 0
  offsetX = mouseX
  offsetY = mouseY
}
