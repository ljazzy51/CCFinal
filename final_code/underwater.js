// These are the functions necessary for the third scene. Its its own document because its where things get complicated with interactions and players

function treasure_box(){
    treasure.img = 'data/treasure_closed.png';
    treasure.x = 1000;
    treasure.y = windowHeight - 200;
    treasure.rotation = 0; 
}

function fish_friends(){
    fish.img = 'data/reg_fish.png';
    fish.rotation = 0;
    fish.collider = 'd';
    
    if ((fish.x > 0) && (fish.x < windowWidth)){
        if(fish.mirror.x == true){
            fish.vel.x = 0.5;
        }
        else{
            fish.vel.x = -0.5;
        }
        fish.vel.y = random(-0.5, 0.5);
    }
    else if(fish.x <= 0){ 
        fish.mirror.x = true;
        fish.x += 2;
    }
    else if (fish.x >= windowWidth){
        fish.mirror.x = false;
        fish.x -= 2;
    }

}