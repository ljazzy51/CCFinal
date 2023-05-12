// These are the functions necessary for the third scene. Its its own document because its where things get complicated with interactions and players

function treasure_box_closed(){
    treasure_closed.img = 'data/treasure_closed.png';
    treasure_closed.x = 1000;
    treasure_closed.y = windowHeight - 200;
    treasure_closed.rotation = 0; 
}
function treasure_box_opened(){
    treasure_opened.img = 'data/treasure_opened.png';
    treasure_opened.x = 1000;
    treasure_opened.y = windowHeight - 200;
    treasure_opened.rotation = 0; 
}

// Regular fish friends who swim in a school 
function fish_friends(){
    fishies.img = 'data/reg_fish.png';
    fishies.rotation = 0;
    fishies.collider = 'd';

    // allows the fish to stay in the screen and swim about as well as change direction when they hit the other side of the screen 
    for(let i = 0; i < fishies.length; i++){
        if((fishies[i].x > 0) && (fishies[i].x < windowWidth)){
            if(fishies[i].mirror.x == true){
                fishies[i].vel.x = random(0.5, 1);
            }
            else{
                fishies[i].vel.x = random(-0.5, -1);;
            }
            fishies[i].vel.y = random(-0.5, 0.5);
        }
        else if(fishies[i].x <= 0){ 
            fishies[i].mirror.x = true;
            fishies[i].x += 2;
        }
        else if (fishies[i].x >= windowWidth){
            fishies[i].mirror.x = false;
            fishies[i].x -= 2;
        }
    }
}

function special_fish(){
    fish_leader.img = 'data/special_fish.png'; 
    fish_leader.rotation = 0; 
    fish_leader.collider = 'd'; 
    fish_leader.vel.y = random(-0.5, 0.5);

    if(keep_swimming == true){
        if((fish_leader.x > 0) && (fish_leader.x < windowWidth)){
            if(fish_leader.mirror.x == true){
                fish_leader.vel.x = random(0.5, 1);
            }
            else{
                fish_leader.vel.x = random(-0.5, -1);;
            }
        }
        else if(fish_leader.x <= 0){ 
            fish_leader.mirror.x = true;
            fish_leader.x += 2;
        }
        else if (fish_leader.x >= windowWidth){
            fish_leader.mirror.x = false;
            fish_leader.x -= 2;
        }
    }

}

function polo_fish_leader(){
    if(polo.collides(fish_leader)){
        keep_swimming = false; 
        polo.x = 150;
        polo.y = 650; 
        fish_leader.x = 275;
        fish_leader.y = 525; 

        fish_leader.vel.x = 0; 

        instructions.visible = true;
        help(800, 400, 400, 50); 
    }
}

function polo_get_key(){
    if(fish_leader.mouse.pressed()){
        instructions.visible = false; 
        treasure_key.visible = true;
        treasure_key.img = 'data/key.png';
        treasure_key.x = 275; 
        treasure_key.y = 550; 
    }
    if(polo.overlaps(treasure_key)){
        polo_key = true;
    }

}

function polo_has_key(){
    if(polo_key == true){
        treasure_key.x = polo.x; 
        treasure_key.y = polo.y; 
    }
}

function open_box(){
    if(polo_key == true){
        if(polo.overlaps(treasure_closed)){
            treasure_closed.visible = false;
            treasure_closed.remove();
            treasure_key.remove();
            treasure_opened.visible = true; 
        }
    }
}

function get_star(){
    star.img = 'data/star.png';
    star.x = 1015;
    star.y = windowHeight - 200;
    star.rotation = 0; 

    help(700, 400, 300, 50);
    instructions.text = "Click on the star to collect it!";
    instructions.visible = true;

    if(star.mouse.pressed()){
        star.remove(); 
        polo_star = true;
    }
}

function submarine(){
    sub.img = 'data/sub.png';
    sub.x = 700;
    sub.y = 400; 
    sub.rotation = 0;
}

function ship_captain(){
    captain.color = "green";
    captain.diameter = 100;
    captain.x = 1000;
    captain.y = 500; 
    captain.rotation = 0; 
}

function befriend_captain(){
    if(sub.mouse.pressed()){
        captain.visible = true; 
        ship_captain();
    }
}
