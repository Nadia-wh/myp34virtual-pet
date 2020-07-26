var foodRem=20;
var dog;
var happyDog;
var database;
var foodS;
var foodStock;
var dogImg;
var happyDogImg;

function preload()
{
dogImg=loadImage("Dog.png");
happyDogImg=loadImage("happydog.png")
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,390,10,10);
  dog.shapeColor="red";
  dog.scale=0.2;
  dog.addImage(dogImg);
  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
fill ("white");
stroke (4);
textSize(20);

text ("Note:Press UP_ARROW Key To Feed Drago Milk!",30,100);
text ("Food remaining :"+foodRem,200,200);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  foodRem = foodRem-1;
  dog.addImage(happyDogImg);
}
  drawSprites();

  //add styles here

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}