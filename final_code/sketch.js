let polo;
let instructions;
let stairs, rope;
let scene_1_finished = false;
let steps, helmet, boat;
let scene_2_finished = false;
let scene_3_finished = false;
let scene_4_finished = false;
let scene_5_finished = false;
let treasure_closed, treasure_opened, treasure_key, star;
let fish, fishies, fish_leader;
let keep_swimming = true; 
let polo_key = false;
let polo_star = false;
let sub_ship, captain; 
let yes_bttn, no_bttn, text_bttn, go_bttns; 
let talk_to_captain = false; 
let gave_star = false;
let in_ship; 
let home_bttn, ship_end, bye_polo, bye_captain;
let home = false; 


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
  treasure_closed = new Sprite();
  treasure_closed.visible = false;
  treasure_opened = new Sprite();
  polo.overlaps(treasure_opened);
  treasure_opened.visible = false;

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

  star = new Sprite();
  star.visible = false;

  // submarine for scene 4
  sub_ship = new Sprite();
  sub_ship.visible = false; 
  captain = new Sprite();
  captain.visible = false; 

  // conversation with the captain for scene 4
  yes_bttn = new Sprite();
  yes_bttn.visible = false;
  no_bttn = new Sprite();
  no_bttn.visible = false;
  text_bttn = new Sprite();
  text_bttn.visible = false;
  go_bttn = new Sprite();
  go_bttn.visible = false;

  // polo in the ship for scene 5
  in_ship = new Sprite();
  in_ship.visible = false;
  ship_end = new Sprite();
  ship_end.visible = false;
  home_bttn = new Sprite();
  home_bttn.visible = false;
  bye_polo = new Sprite();
  bye_polo.visible = false;
  bye_captain = new Sprite();
  bye_captain.visible = false;
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
  if(scene_3_finished == true){
    scene_four_background();
  }
  if(scene_4_finished == true){
    scene_five_background();
  }

  //print(mouseX, "and ", mouseY);

  draw_polo();
  polo_move();
  
  one_two();
  two_three(); 
  three_four();
  four_five();

}
