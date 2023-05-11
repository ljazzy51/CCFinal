let polo;
let stairs;
let rope;
let cloud_stairs;
let scene_1_finished = false;
let steps;
let helmet;
let boat;
let scene_2_finished = false;
let scene_3_finished = false;
let treasure;
let fish;
let fishies;

function setup(){
  createCanvas(windowWidth,windowHeight);
  polo = new Sprite(855, 555);
  polo.width = 60;
  polo.height = 100;
  stairs = new Sprite();
  rope = new Sprite();
  helmet = new Sprite();
  boat = new Sprite();
  helmet.visible = false;
  boat.visible = false;
  treasure = new Sprite();
  treasure.visible = false;

  // creating the fishies group for the 3rd scene 
  fishies = new Group();

  for(let i = 0; i <11; i++){
    fish = new Sprite((random(0, windowWidth)), (random(0, 300)));
    fish.overlap(fishies);
    fishies.add(fish); 
  }
  
  fishies.visible = false;
  
  
}

function draw(){
  if(scene_1_finished == false){
    scene_one_background();
  }
  if(scene_1_finished == true){
    scene_two_background();
  }
  if(scene_2_finished == true){
    scene_three_background();
  }

  //print(mouseX, "and ", mouseY);

  draw_polo();
  polo_move();
  
  one_two();
  two_three(); 

}
