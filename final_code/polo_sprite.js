// functions for the polo sprite 

// this function draws polo on the screen in beige and no stroke
// the size and shape come from polo.width and polo.height 
function draw_polo(){
  polo.stroke = "none";
  polo.color = "beige"; 
  // disables polo from rotating when it collides with the stairs 
  polo.rotation = 0;
  polo.collider = 'd';
}

// this function controls polos movement through the arrow keys 
function polo_move(){
  // left or right movement
  if (kb.pressing('left')){ 
    polo.vel.x = -5;
  }
  else if (kb.pressing('right')){ 
    polo.vel.x = 5;
  }
  else{
    polo.vel.x = 0;
  }
  
  // up and down movement 
  if (kb.pressing('up')){
    polo.vel.y = -5;
  }
  else if (kb.pressing('down')){ 
    polo.vel.y = 5;
  }
  else{
    polo.vel.y = 0;
  }
  
  // keeping the sprite within the boundaries of the canvas
  if(polo.x >= (windowWidth - (polo.width / 2))){
    polo.vel.x = 0;
    polo.x -= 1;
  }
  else if(polo.y >= (windowHeight - (polo.height / 2))){
    polo.vel.y = 0;
    polo.y -= 1;
  }
  if(polo.x <= (0 + (polo.width / 2))){
    polo.vel.x = 0;
    polo.x += 1;
  }
  else if(polo.y <= (0 + (polo.height / 2))){
    polo.vel.y = 0;
    polo.y += 1;
  }

  // allowing polo to grow and shrink using the + and - keys 
  // growing polo - += key
  if((kb.pressing("+")) || (kb.pressing("="))){
    polo.height += 1;
    polo.width += 1;
  }
  // shrinking polo - -_ key
  if((kb.pressing("_")) || (kb.pressing("-"))){
    polo.height -= 1;
    polo.width -= 1;
  }
  // returning to standard size - n key
  if((kb.pressing("n"))){
    polo.height = 100;
    polo.width = 60;
  }
}

function draw_balls(){
  balls = new Group();

  // Adding 8 balls to the ball group using a for loop
  for (let b = 0; b < 8; b++){
    let ball = new Sprite();
    ball.color = 'gold';
    ball.diameter = 10;
    ball.collider = 'k';
    balls.add(ball);
  }
  // setting the x and y position for each of the balls within the balls group 
  balls[0].x = 210;
  balls[0].y = 550;
  
  balls[1].x = 300;
  balls[1].y = 495;
  
  balls[2].x = 385;
  balls[2].y = 440;
  
  balls[3].x = 480;
  balls[3].y = 385;
  
  balls[4].x = 560;
  balls[4].y = 330;
  
  balls[5].x = 655;
  balls[5].y = 275;

  balls[6].x = 745;
  balls[6].y = 220;
  
  balls[7].x = 835;
  balls[7].y = 165;

  collect();
  
}

// removes whatever ball polo is touching 
function collect(){
  for (let b = 0; b >= balls.length; b++){
    b_index = balls[b];
    if(polo.overlaps(b_index)){
      balls[b].remove();
    }
  }
}