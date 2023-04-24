// these functions draw certain aspects that may be reused in other scenes. 
function draw_stairs(){
    // rectangle and lines that represents the stairs to the next level 
    noStroke;
    fill(0);
    rect(windowWidth * 5/7, windowHeight * 4/5 , 25, 75);
    stroke(0);
    strokeWeight(3);
    line(windowWidth * 5/7 + 2, windowHeight * 4/5 + 3, windowWidth, windowHeight * 4/5 + 3);
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

// this is the class for the different backgrounds to scenes
class Scene_background{
    constructor(){
    }

    scene_one_background(){
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

}