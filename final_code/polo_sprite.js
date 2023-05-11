// functions for the polo sprite 

// this function draws polo on the screen in beige and no stroke
// the size and shape come from polo.width and polo.height 
function draw_polo(){
  polo.stroke = "beige";
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

function polo_helmet(){
  if(kb.pressing('left')){ 
    helmet.mirror.x = false;
  }
  if(kb.pressing('right')){ 
    helmet.mirror.x = true;
  }
}