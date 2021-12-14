var score = 0;
var burgerGroup, cheeseGroup, flourGroup, milkGroup,sauceGroup, mushroomGroup;
var score = 0


function preload(){
  burgerImg = loadImage("burger (1).png");
  cheeseImg = loadImage("cheese (2).png");
  flourImg = loadImage("flour.png");
  milkImg = loadImage("milk.png");
  sauceImage = loadImage("sauce a.png");
  mushroomImg = loadImage("mushroom.png");
  basketImg = loadImage("basket.png")
  kitchen = loadImage("kitchen.png")

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background


//creating boy running
basket = createSprite(180,340,30,30);
basket.scale =0.09;
basket.addImage(basketImg);
burgerGroup = new Group()
cheeseGroup = new Group()
flourGroup = new Group()
milkGroup = new Group()
sauceGroup = new Group()
mushroomGroup = new Group()
}


function draw() {
  background(kitchen);
  text("score = " + score, 50,50)
  var selectSprites = Math.round(random(1,6));
  
  
  if(frameCount%60 === 0){
    
  switch(selectSprites){
    case 1:
      burgerSp();
      break;
    case 2:
      cheeseSp();
        break;
    case 3:
      flourSp();
      break;
    case 4:
      milkSp();
      break;
    case 5:
      sauceSp();
      break;
    case 6:
      mushroomSp();
      break;
  
  }  }  
if(basket.isTouching(sauceGroup)){
  sauceGroup.destroyEach(sauce)
  score = score + 1
}
if(basket.isTouching(cheeseGroup)){
  cheeseGroup.destroyEach(cheese)
  score = score + 1;
}
if(basket.isTouching(flourGroup)){
  flourGroup.destroyEach(flour)
  score = score + 1;
}

if(basket.isTouching(milkGroup)){
  milkGroup.destroyEach(milk)
  score = score + 1;
}
  if(basket.isTouching(burgerGroup)){
    burgerGroup.destroyEach(burger)
    score = score - 1;
  }

  if(basket.isTouching(mushroomGroup)){
    mushroomGroup.destroyEach(mushroom)
    score = score - 1;
  }
  
  edges= createEdgeSprites();
  basket.collide(edges);

  
  basket.depth = basket.depth + 1
  basket.x = World.mouseX
  drawSprites();
}


function burgerSp(){
  burger = createSprite(random(50,350),40,10,10)
  burger.velocityY = score +3
  burger.depth = burger.depth;
  burger.addImage(burgerImg)
  burger.scale =0.2
  burger.lifetime = 150;
  burgerGroup.add(burger)
  
}

function cheeseSp(){
  cheese = createSprite(random(50,350),40,10,10)
  cheese.velocityY = score +3
  cheese.depth = cheese.depth;
  cheese.addImage(cheeseImg)
  cheese.scale = 0.2
  cheese.lifetime = 150;
  cheeseGroup.add(cheese)
  
}

function flourSp(){
  flour = createSprite(random(50,350),40,10,10)
  flour.velocityY = score +3
  flour.depth = flour.depth;
  flour.addImage(flourImg)
  flour.scale = 0.2
  flour.lifetime = 150;
  flourGroup.add(flour)
  
}

function milkSp(){
 
  milk = createSprite(random(50,350),40,10,10)
  milk.velocityY = score +3
  milk.depth =  milk.depth;
  milk.addImage(milkImg)
  milk.scale = 0.2
  milk.lifetime = 150;
  milkGroup.add(milk)
}

function sauceSp(){
  sauce = createSprite(random(50,350),40,10,10)
  sauce.velocityY = score +3
  sauce.depth =  sauce.depth;
  sauce.addImage(sauceImage)
  sauce.scale = 0.2
  sauce.lifetime = 150;
  sauceGroup.add(sauce)
}
  


function mushroomSp(){
  mushroom = createSprite(random(50,350),40,10,10)
  mushroom.velocityY = score +3
  mushroom.depth =  mushroom.depth;
  mushroom.addImage(mushroomImg)
  mushroom.scale = 0.08
  mushroom.lifetime = 150;
  mushroomGroup.add(mushroom)
}