// class for the characters including polo and other characters that polo meets 
let posX;
let posY;
let polo_height = 100;
let polo_width = 60;
let next_scene = false;

class Friends{

    constructor(x , y){
        this.posX = x;
        this.posY = y;
    }

    // this method draws polo on the screen based on the x and y coordinates given when each new friends is initiialized
    draw_polo(){
        noStroke();
        fill(245, 66, 0);
        ellipse(this.posX, this.posY, polo_width, polo_height);
    }

    // this method allows polo to grow and shrink as well as move around the screen staying within bounds of the screen's dimensions
    polo_move(){
    
        // Movement left right up and down using arrow keys keeping polo within the limitations of the screen
        if(keyIsDown(LEFT_ARROW)){
            if(this.posX <= (0 + (polo_width/2))){
                this.posY += 0;
            }
            else{
                this.posX -= 5; 
            }
        }
        if(keyIsDown(RIGHT_ARROW)){
            if(this.posX >= (windowWidth - (polo_width/2))){
                this.posY += 0;
            }
            else{
                this.posX += 5; 
            }
        }
        if(keyIsDown(UP_ARROW)){
            if(this.posY <= (0 + (polo_height/2))){
                this.posY += 0;
            }
            else{
                this.posY -= 5; 
            }
        }
        if(keyIsDown(DOWN_ARROW)){
            if(this.posY >= (windowHeight - (polo_height/2))){
                this.posY += 0;
            }
            else{
                this.posY += 5; 
            }
        }

        // Growing and shrinking in size using the + and - keys, n returns polo to original size
        if(keyIsDown(107)|| keyIsDown(187)){
            polo_height += 1; 
            polo_width += 1;
        }
        if(keyIsDown(109)|| keyIsDown(189)){
            polo_height -= 1; 
            polo_width -= 1;
        }
        if(keyIsDown(78)){
            polo_height = 100; 
            polo_width = 60;
        }
        //print(this.posX, this.posY);

        //add a jump functionality using the space bar maybe? 
    }

    one_two(){
        //if polo touches the start of the tightrope and is at least touching the line then the scene changes to the next
    }

}