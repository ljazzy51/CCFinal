// These are the functions necessary for the third scene. Its its own document because its where things get complicated with interactions and players

function treasure_box(){
    treasure.img = 'data/treasure_closed.png';
    treasure.x = 1000;
    treasure.y = windowHeight - 200;
    treasure.rotation = 0; 
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
    if(polo_key = true){
        treasure_key.x = polo.x; 
        treasure_key.y = polo.y; 
    }
}