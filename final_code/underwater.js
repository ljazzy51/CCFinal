// These are the functions necessary for the third scene. Its its own document because its where things get complicated with interactions and players

function treasure_box(){
    treasure.img = 'data/treasure_closed.png';
    treasure.x = 1000;
    treasure.y = windowHeight - 200;
    treasure.rotation = 0; 
}

function fish_friends(){
    fishies.img = 'data/reg_fish.png';
    fishies.rotation = 0;
    fishies.collider = 'd';


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