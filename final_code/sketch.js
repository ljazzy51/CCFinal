let polo;
let instructions;
let stairs, rope;
let scene_1_finished = false;
let steps, helmet, boat;
let scene_2_finished = false;
let scene_3_finished = false;
let treasure, treasure_key;
let fish, fishies, fish_leader;
let keep_swimming = true; 
let polo_key = false;

function setup(){
  createCanvas(windowWidth,windowHeight);

  // polo for all the scenes
  polo = new Sprite(855, 555);
  polo.width = 60;
  polo.height = 100;

  // instruction box for scenes
  instructions = new Sprite();
  instructions.visible = false; 

  // stairs and rope for scene 1
  stairs = new Sprite();
  rope = new Sprite();

  // helmet and boat for scene 2
  helmet = new Sprite();
  boat = new Sprite();
  helmet.visible = false;
  boat.visible = false;

  // treasure for scene 3
  treasure = new Sprite();
  treasure.visible = false;

  // normal fishies group for scene 3
  fishies = new Group();
  for(let i = 0; i <11; i++){
    fish = new Sprite((random(0, windowWidth)), (random(0, 300)));
    fish.overlap(fishies);
    fishies.add(fish); 
  }
  fishies.visible = false;
  
  // special fish and key for scene 3
  fish_leader = new Sprite((random(0, windowWidth)), (random(0, 300)));
  fish_leader.overlap(fishies);
  fish_leader.visible = false;
  treasure_key = new Sprite();
  treasure_key.visible = false; 

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
