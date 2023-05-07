let polo;
let stairs;
let rope;
let cloud_stairs;
let scene_1_finished = false;

function setup(){
  createCanvas(windowWidth,windowHeight);
  polo = new Sprite(855, 555);
  polo.width = 60;
  polo.height = 100;
  stairs = new Sprite();
  rope = new Sprite();

}

function draw(){
  if(scene_1_finished == false){
    scene_one_background();
  }
  if(scene_1_finished == true){
    scene_two_background();
  }

  print(mouseX, "and ", mouseY);

  draw_polo();
  polo_move();
  
  one_two();
  
}
