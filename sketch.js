var dog , happyDog , database , foodS , foodStock , dogImg , happydogImg ; 

function preload()
{ dogImg = loadImage("images/dogImg.png");
happydogImg = loadImage("images/dogImg1.png");
	
}

function setup() {
	createCanvas(500, 500);
 dog =createSprite(width/2, 80, 10,10);
	dog.addImage(dogImg);
	dog.scale=0.2;

 happyDog=createSprite(width/2, 80, 10,10);
	happyDog.addImage(happydogImg);;
	happyDog.scale=0.2;

	database=firebase.database();
	
	foodStock=database.ref("food");
	foodStock.on("value", readStock);

	textSize(30);
fill("black");
stroke(white);
text("Note- Press UP_ARROW key to feed dog Milk" , 10 , 200);

}


function draw() {  
background(46,189,37)

if(keyWentDown(UP_ARROW)){
	writeStock(foodS);
	dog.addImage(happyDog);
}
 
	
	
drawSprites();

textSize(30);
fill("black");
stroke(white);
text("Note- Press UP_ARROW key to feed dog Milk" , 10 , 200);

function readStock(data){
	foodS = data.val();

}

function writeStock(x){
	database.ref("/").update({
		food:x
	})
}
  

}



