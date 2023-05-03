let polo;
let scene_look;

function setup(){
  createCanvas(windowWidth,windowHeight);
  polo = new Sprite(855, 555);
  polo.width = 60;
  polo.height = 100;
  scene_look = new Scene_background();
  
}

function draw(){
  scene_look.scene_one_background();

  draw_polo();
  polo_move();
  
}
