var airhockeytableimg,airhockeytable
var greenmallet
var redmallet
var hockeypuck


function preload() {
  airhockeytableimg = loadImage ("Images/air-hockey-table.jpg")
  greenmallet = loadImage ("Images/greenmallet.png")
  redmallet = loadImage ("Images/redmallet.jpg")
  hockeypuck = loadImage ("Images/hockeypuck.png")

}

function setup() {
  canvas = createCanvas(1000,1000);
  airhockeytable = createSprite(300,300,100,100)
}

function draw() {
  background("white");
  drawSprites()
}