// this is the function for the final scene to get polo home 

function ship(){
    in_ship.img = 'data/sub_polo.png';
    in_ship.x = windowWidth/2; 
    in_ship.y = windowHeight/2; 
    in_ship.rotation = 0; 
}

function ship_move(){
    // left or right movement
  if (kb.pressing('left')){ 
    in_ship.vel.x = -5;
  }
  else if (kb.pressing('right')){ 
    in_ship.vel.x = 5;
  }
  else{
    in_ship.vel.x = 0;
  }
  
  // up and down movement 
  if (kb.pressing('up')){
    in_ship.vel.y = -5;
  }
  else if (kb.pressing('down')){ 
    in_ship.vel.y = 5;
  }
  else{
    in_ship.vel.y = 0;
  }
}

//push to go home
function go_home(){
    home_bttn.x = 750;
    home_bttn.y = 100; 
    home_bttn.width = 200;
    home_bttn.height = 50;
    home_bttn.color = 'yellow';
    home_bttn.textSize = 20;
    home_bttn.text = 'Push to GO HOME';
    home_bttn.collider =  'k';
    home_bttn.rotation = 0; 
}

function headed_home(){
    if(home_bttn.mouse.pressed()){
        in_ship.remove();
        home = true;
    }
}

function ship_ending(){
    ship_end.img = 'data/sub_captain.png';
    ship_end.x = 100; 
    ship_end.y = 100; 
    ship_end.rotation = 0; 
}

// polo thanks you for an adventure 
function polo_bye(){
    bye_captain.x = 1000;
    bye_captain.y = 450; 
    bye_captain.width = 300;
    bye_captain.height = 50;
    bye_captain.color = 'pink';
    bye_captain.textSize = 20;
    bye_captain.text = 'Thanks for the adventure!';
    bye_captain.collider =  'k';
    bye_captain.rotation = 0; 
}

// the captain of the ship says bye to polo at the end 
function captain_bye(){
    bye_polo.x = 400;
    bye_polo.y = 75; 
    bye_polo.width = 200;
    bye_polo.height = 50;
    bye_polo.color = 'pink';
    bye_polo.textSize = 20;
    bye_polo.text = 'Bye Polo!';
    bye_polo.collider =  'k';
    bye_polo.rotation = 0; 
}