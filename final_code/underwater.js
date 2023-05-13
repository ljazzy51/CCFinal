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
        star.visible = false; 
        polo_star = true;
    }
}

function submarine(){
    sub_ship.img = 'data/sub.png';
    sub_ship.x = 500;
    sub_ship.y = 400; 
    sub_ship.rotation = 0;
}

function ship_captain(){
    captain.color = "green";
    captain.width = 100;
    captain.height = 100;
    captain.x = 1000;
    captain.y = 400; 
    captain.rotation = 0; 
}

function befriend_captain(){
    if(talk_to_captain == true){
        instructions.visible = false;
        captain.visible = true; 
        ship_captain(); 
    }
}

function ask_for_ride(){
    if(polo.collides(captain)){
        yes_bttn.visible = true;
        no_bttn.visible = true;
        text_bttn.visible = true;
        yes_();
        no_();
        convo(); 
    }
}

function yes_(){
    yes_bttn.x = 800; 
    yes_bttn.y = 350; 
    yes_bttn.width = 50; 
    yes_bttn.height = 50; 
    yes_bttn.textSize = 20; 
    yes_bttn.color = 'lightgreen';
    yes_bttn.text = "YES"; 
    yes_bttn.rotation = 0; 
    yes_bttn.collider = 's';
}

function no_(){
    no_bttn.x = 900; 
    no_bttn.y = 350; 
    no_bttn.width = 50; 
    no_bttn.height = 50; 
    no_bttn.textSize = 20; 
    no_bttn.color = 'red';
    no_bttn.text = "NO"; 
    no_bttn.rotation = 0; 
    no_bttn.collider = 's';
}

function convo(){
    text_bttn.x = 850; 
    text_bttn.y = 250; 
    text_bttn.width = 350; 
    text_bttn.height = 50; 
    text_bttn.textSize = 20; 
    text_bttn.color = 'pink';
    text_bttn.text = "I heard you found my star key!"; 
    text_bttn.rotation = 0; 
    text_bttn.collider = 's';
}

function go_(){
    go_bttn.x = 800; 
    go_bttn.y = 350; 
    go_bttn.width = 100; 
    go_bttn.height = 50; 
    go_bttn.textSize = 20; 
    go_bttn.color = 'lightgreen';
    go_bttn.text = "LETS GO"; 
    go_bttn.rotation = 0; 
    go_bttn.collider = 's';
}

function ride_options_1(){
    if(yes_bttn.mouse.pressed()){
        yes_();
        no_();
        convo();
        text_bttn.update(text_bttn.text = "Yay! Lets go on the next adventure!", text_bttn.width = 350); 
        yes_bttn.visible = false; 
        no_bttn.visible = false; 
        go_bttn.visible = true;
        go_();
    }
    if(no_bttn.mouse.pressed()){
        yes_();
        no_();
        convo();
        text_bttn.update(text_bttn.text = "Hmmm. Dont Lie! Thats the only key!", text_bttn.width = 350); 
        no_bttn.visible = false; 
    }
}

function ride_options_2(){
    if(go_bttn.mouse.pressed()){
        gave_star = true; 
    }
}
