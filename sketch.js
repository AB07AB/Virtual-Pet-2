//Create variables here
var dog, happyDog, database, foodS, foodStock

var dogImg1;

var button1, button2;

var fedTime, lastFed;

var foodObj


function preload()
{
  dogImg1=loadImage("Dog.png")
  happyDog=loadImage("happydog.png")
}

function setup() {
  createCanvas(500, 500);
  
  foodObj=createSprite(100,250);

  feed=createButton("Feed the dog!")
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFodd=createButton("Add food")
  addFodd.position(800,95);
  addFodd.mousePressed(addFoods);

  dog=createSprite(250,250)
  dog.addImage(dogImg1)
  dog.scale=0.2

  database=firebase.database()
  var nam=database.ref('Food')
  nam.on("value", call)
  
}


function draw() {  

  background("46, 139, 87");

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDog)
  }

  drawSprites();
  //add styles here
  textSize(10)
  fill("black")
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",150,100)

}

function call(data){
  foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}

