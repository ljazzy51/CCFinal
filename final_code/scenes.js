// these functions draw certain aspects that may be reused in other scenes. 
function stairs_to_cloud(){
    steps = new Sprite();
    steps.img = 'data/steps.png'; 
    steps.scale = 0.75
    steps.x = 525; 
    steps.y = 400;
    steps.collider = 'k';

    polo.overlaps(steps);

}


function draw_stairs(){
    // rectangle and lines that represents the stairs to the next level 
    stairs.color = "black";
    stairs.width = 25;
    stairs.height = 75;
    stairs.x = windowWidth * 5/7;
    stairs.y = windowHeight * 4/5;
    stairs.collider = 'k';

    rope.color = "black";
    rope.width = 410;
    rope.height = 3;
    rope.x = stairs.x + 205;
    rope.y = stairs.y - (stairs.height /2 - 10);
    rope.rotation = 180;
    rope.collider = 'k'
}
  
function draw_sky_water(){
    // rectangle that creates the sky
    noStroke;
    fill(10,215,255);
    rect(0,0, windowWidth, (windowHeight * 2/3));
    //rectangle that creates the water
    noStroke;
    fill(62,115,224);
    rect(0, (windowHeight * 2/3), windowWidth, (windowHeight * 1/3));
}

// this are the functions for the different backgrounds to scenes
function scene_one_background(){
    draw_sky_water();
    // ellipse that creates the island 
    noStroke;
    fill(246,202,153);
    ellipse(windowWidth/2, windowHeight * 4/5, 700, 245);
    // rectangle that represents the treehouse 
    noStroke;
    fill(125,103,77);
    rect(windowWidth * 2/5 - 50, 0, 400, 600);
    // rectangle that represents the door 
    noStroke;
    fill(255,118,87);
    rect(windowWidth/2 - 50, windowHeight * 2/5 + 50, 150, 250);
    draw_stairs();
}

function draw_cloud(){
    // draws cloud
    noStroke();
    fill(255);
    ellipse(1025, 175, 300, 100);
    // draws cloudman
    fill(240,149,25);
    ellipse(1100, 150, 50, 100);
    // draws cloudman's fishing rod
    fill(0);
    rect(1110, 150, 50, 5);
    
    rod_line.color = "black";
    rod_line.width = 5;
    rod_line.height = 400;
    rod_line.x = 1157;
    rod_line.y = 350;
    rod_line.collider = 'k';

}

function scene_two_background(){
    stairs.remove();
    rope.remove();
    draw_sky_water();
    stairs_to_cloud();
    draw_cloud();

}

function one_two(){
    if((polo.collides(stairs)) || (polo.collides(rope))){
      scene_1_finished = true; 
      polo.x = 50;
      polo.y = 550; 
    }   
  }