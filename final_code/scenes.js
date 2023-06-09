// these functions draw certain aspects that may be reused in other scenes. 

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
    noStroke();
    fill(10,215,255);
    rect(0,0, windowWidth, (windowHeight * 2/3));
    //rectangle that creates the water
    noStroke();
    fill(62,115,224);
    rect(0, (windowHeight * 2/3), windowWidth, (windowHeight * 1/3));
}

// this are the functions for the different backgrounds to scenes
function scene_one_background(){
    draw_sky_water();
    // ellipse that creates the island 
    noStroke();
    fill(246,202,153);
    ellipse(windowWidth/2, windowHeight * 4/5, 700, 245);
    // rectangle that represents the treehouse 
    noStroke();
    fill(125,103,77);
    rect(windowWidth * 2/5 - 50, 0, 400, 600);
    // rectangle that represents the door 
    noStroke();
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
    
    // draws the line of the fishing rod
    fill(0);
    rect(1155, 150, 5, 400);
}

// creating the background for the second scene which is reallly just a buffer scene to get to the "meat" of the game
function scene_two_background(){
    stairs.remove();
    rope.remove();
    draw_sky_water();
    anchor_line();
    draw_boat();
    draw_helmet();
}

function one_two(){
    if((polo.collides(stairs)) || (polo.collides(rope))){
      scene_1_finished = true; 
      polo.x = 50;
      polo.y = 550; 
    }   
}

function draw_boat(){
    boat.visible = true;
    boat.img = 'data/boat.png';
    boat.x = windowWidth/2; 
    boat.y = 550;
    boat.collider = 'k';
    boat.rotation = 0;
    polo.overlaps(boat); 
}

function anchor_line(){
    strokeWeight(5);
    stroke(0);
    line(0, 600, windowWidth/2 - 100, 600);
}

function draw_helmet(){
    helmet.visible = true;
    helmet.img = 'data/helmet.png';
    helmet.x = 675;
    helmet.y = 405; 
    helmet.collider = 'k';
    polo.overlaps(helmet);

}

function two_three(){
    if(scene_3_finished == false && scene_2_finished == false){
        if((polo.x > 675) && (polo.x < 750) && (polo.y > 405) && (polo.y < 490)){
            scene_2_finished = true; 
            polo.y = 100; 
        }
    }
}

// creating the set up for the 3rd scene (underwater scene)
function scene_three_background(){
    boat.visible = false; 
    helmet.y = polo.y - 20;
    helmet.x = polo.x;
    noStroke();
    background(62,115,224);

    polo_helmet();
    treasure_closed.visible = true;
    if(treasure_closed.visible == true){
        treasure_box_closed();
    }
    fishies.visible = true;
    fish_friends();
    fish_leader.visible = true;
    special_fish();
    polo_fish_leader();
    polo_get_key();
    polo_has_key();
    open_box();
    if(treasure_opened.visible == true){
        treasure_box_opened();
        star.visible = true;
        get_star();
    }
    if(polo_star == true){
        instructions.visible = false; 
        star.visible = false;
        scene_3_finished = true;
    }
}

function three_four(){
    if(scene_3_finished == true){
        treasure_opened.remove(); 
        fishies.remove(); 
        fish_leader.remove();
    }
}

function scene_four_background(){
    background(62,115,224);
    submarine();
    sub_ship.visible = true;
    help(400, 200, 400, 50);
    instructions.text = "Click on ship to see if anyone is inside!";
    instructions.visible = true;
    if(sub_ship.mouse.pressed()){
        talk_to_captain = true;
    }
    befriend_captain();
    ask_for_ride(); 
    ride_options_1();
    ride_options_2();
}

function four_five(){ 
    if(gave_star == true) {
        scene_4_finished = true;
        
        text_bttn.visible = false;
        go_bttn.remove();
        yes_bttn.remove();
        no_bttn.remove();
        text_bttn.visible = false;
        sub_ship.visible = false;
        star.remove();
        helmet.remove();
    }
}


function scene_five_background(){
    background(62,115,224);

    captain.visible = false;
    polo.visible = false;
    in_ship.visible = true;
    ship();
    home_bttn.visible = true;
    go_home();
    headed_home();
    adventure_done();
}

// ending of the sketch
function adventure_done(){
    if(home == true){
        scene_one_background();
        polo.visible = true;
        polo.x = 855;
        polo.y = 555;
        home_bttn.visible = false;
        ship_end.visible = true;
        ship_ending();
        bye_polo.visible = true;
        bye_captain.visible = true; 
        polo_bye();
        captain_bye();

    }
}