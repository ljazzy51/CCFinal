let polo;
let scene_look;

function setup(){
  createCanvas(windowWidth,windowHeight);
  polo = new Friends(855, 555);
  scene_look = new Scene_background();
  
}

function draw(){
  scene_look.scene_one_background();

  polo.draw_polo();
  polo.polo_move();
  
}
