// ARENA WARRIOR
let zombies = [];
let zombieHealth=100
let movement=0
let jumpValue=0
let gravity=0
let timer=0
let characterx
let charactery
let characterHealth=100
let death=0
let weaponx
let weaponSide=7
let weaponSide2=310
let weaponSide3=50
let attackWeapon2=0
let attackWeapon=0
let attackBase=0
let attackHead=0
let adjust=4
let adjust2=1.5
let rotated=false
let slow=0
let monsterCount=0
let score1 = 0
let platform1x
let platform1y=500
let platform2x
let platform2y=160
let platform3x
let platform3y=500
let platformSpawnx
let randomSpawn
let platformSpawny = 100;
let color= ("green")
let cooldown = 0
let controlText
let timerVar=0
let level=1


function setup(){
createCanvas(1350,600)
background(255)
}

function draw(){
  characterx=200+movement
  charactery=500-jumpValue+gravity
  weaponx=characterx+weaponSide
STAGE();
BOUNDARIES();
DISPLAYSTATS()
CHARACTER1();
HORIZONTAL();
GRAVITY();
PLATFORM();
RANDOM_PLATFORMS();
//DEATH();
ATTACK();
JUMP();
RESET();
COOLDOWN();
OOF();
if(keyIsDown(32) && cooldown>=15){
    rotated==false
    for(i=0;i<1000000;i++){
      rotated==false
    }
    cooldown=0
  }
  if(cooldown<1 && keyIsDown(32)){
    rotated=true
}
else{
  rotated=false
}


for (let i = 0; i < zombies.length; i++) {
    zombies[i].drawZombies();
    zombies[i].moveZombies();
    zombies[i].Score();
    zombies[i].attackZombies();
    zombies[i].healthLoss();
    zombies[i].gameOver();
  }



}
function STAGE(){
  background(255)
  fill(255)
  stroke("black")
  strokeWeight(25)
  rect(0,0,1325,600)
  line(150,523,500,523)
  line(800,523,1200,523)
  line(450,200,850,200)
}

function RANDOM_PLATFORMS(){
  platform1x= random(150,500)
  platform2x= random(450,850)
  platform3x= random(800,1200)
}


function HORIZONTAL(){
  if(keyIsDown(LEFT_ARROW)){
    movement= movement-5
    weaponSide=-10
    weaponSide2=130
    weaponSide3=230
    adjust=4
    adjust2=1.5
  //  attackWeapon
  }
  if(keyIsDown(RIGHT_ARROW)){
    movement=movement+5
    weaponSide=7
    weaponSide2=310
    weaponSide3=50
    adjust=0
    adjust2=0
  }
}

function COOLDOWN(){
  if(keyIsDown(32)){
    cooldown=cooldown+0.1
  }
}

function CHARACTER1(){
  fill(0,255-death,0)
  noStroke()
  ellipse(characterx,charactery,20,20)
  ellipse(characterx, charactery-20,20,20)
  //WEAPONBASE()
  //WEAPONHEAD()
//  ATTACKBASE()
//  ATTACKHEAD()
}

function keyReleased(){
    if (keyCode == 32) {
    cooldown=0
    }
  }



function keyPressed(){
  platform1y=500
  platform2y=160
  platform3y=500
  platformSpawn= [int(random(0,3))]

  if(platformSpawn==0){
    platformSpawnx=platform1x
    platformSpawny=485
  }
  if(platformSpawn==1){
    platformSpawnx=platform2x
    platformSpawny= 162
  }
  if(platformSpawn==2){
    platformSpawnx=platform3x
    platformSpawny=485
  }
  if(keyIsDown(32)){
    monsterCount=monsterCount+1
  }
  if(monsterCount==1){
    color=("green")
    let z = new Zombie(platformSpawnx,platformSpawny,false, color,100,50)
    zombies.push(z)
    monsterCount=0
  }
}


  function ATTACK(){
    if(rotated==true){
      ATTACKBASE()
      ATTACKHEAD()
    }
    else{
      if(rotated==false){
        WEAPONBASE()
        WEAPONHEAD()
      }
    }
  }

function ATTACKBASE(){
  fill("black")
  rect(weaponx- (2*adjust), charactery-10,10,5)
  fill(109,73,25)
  rect(weaponx+10-(9*adjust),charactery-10,20,5)
}

function ATTACKHEAD(){
  fill("grey")
arc(weaponx+(10*(3-adjust-adjust2)),charactery-10,20,20,radians(45),radians(135))

}

function WEAPONBASE(){
  fill("black")
  rect(weaponx,charactery-10,5,10)
  fill(109, 73, 25)
  rect(weaponx,charactery-30,5,20)
}

function WEAPONHEAD(){
  fill("grey")
  arc(weaponx+adjust,charactery-30,20,20,radians(weaponSide2),radians(weaponSide3))
}


function OOF(){
  if(characterHealth<=0){
    charactery=charactery+1300
    characterHealth=0
    STAGE()
    DISPLAYSTATS();
    textSize(50)
    fill(255,0,0)
    strokeWeight(5)
    stroke(0)
    text("YOU DIED",550,300)
  }
}

function JUMP(){
  if(keyIsDown(UP_ARROW)){
    jumpValue=jumpValue+10-slow
    slow=slow+0.05
    }
  }

function FirstHit(){
  this.health=75
}

function SecondHit(){
  this.health=50
}

function RESET(){

    if(characterx>450 && characterx<850 && charactery<=200 && charactery>=175){
      charactery=200
      jumpValue=jumpValue
      slow=0
    }
  if(characterx>150 && characterx<500 && charactery<=525 && charactery>=498){
      charactery=500
      jumpValue=jumpValue
      slow=0
    }
    if(characterx>800 && characterx<1200 && charactery<=525 && charactery>=500){
      charactery=500
      slow=0
      jumpValue=jumpValue
    }
  }
//}



  function GRAVITY(){
    if(500-jumpValue+gravity<600){
      gravity=gravity+4
    }
  }

  function PLATFORM(){
    if(characterx>450 && characterx<850 && charactery<=200 && charactery>=175){
      gravity=gravity-4
    }
    if(characterx>150 && characterx<500 && charactery<=525 && charactery>=498){
      gravity=gravity-4
    }
    if(characterx>800 && characterx<1200 && charactery<=525 && charactery>=500){
      gravity=gravity-4
    }
  }


  function BOUNDARIES(){
      	if (characterx >= 1300){
          movement=movement-5
        }
        if(characterx <= 25){
          movement = movement+5
        }
        if(charactery<45){
          jumpValue=jumpValue-10
        }
  	}


  //  }
//  }

  // function DEATH(){
  //
  //   if(charactery>=20){
  //     death=0
  //     }
  //   if(charactery<20){
  //     death=255
  //     }
  // }


function DISPLAYSTATS(){
  strokeWeight(2)
  textSize(30)
  fill(0)
  text("SCORE: "+score1,25,50)
  text("HEALTH: "+characterHealth,25,100)

/*function zombieHit(){
  this.y=this.y+5
  this.x=this.x+5
  characterHealth=characterHealth-1
}*/


}

class Zombie {

  constructor(x,y,scored,color,zombieHealth,attack){
    this.x = x
    this.y = y
    this.scored = scored
    this.color = color
    this.health = zombieHealth
    this.attack=attack
  }

  drawZombies(){
    //stroke(0)
    //strokeWeight(1)
    fill(color)
    rect(this.x,this.y,16,16)
    rect(this.x+3,this.y+16,3,10)
    rect(this.x+10,this.y+16,3,10)
  }


  moveZombies(){
    if(characterx-20>this.x){
      this.x=this.x+0.5
    }//from rightside

    if(characterx+15<this.x){
      this.x=this.x-0.5
    }//from leftside

    if(charactery-15>this.y && this.x>850){
      this.y=this.y+0.5
    }//off of top platform

    if(charactery-15>this.y && this.x<450){
      this.y=this.y+0.5
    }//off of top platform

    if(this.x>450 && this.x>850){
      this.y = this.y
    }//on platform

    if(this.y>485){
      this.y=this.y-1
    }//fallen down


  }
  /*attackZombies(){
    if(characterx-this.x<=20 && characterx-this.x>0 && charactery-this.y<=20 && charactery-this.y>0){
      zombieHit()
    }
  }
*/



  Score(){//DON'T MIND TOP CODE
    /*stroke(1)
    fill(0)
    rect(this.x, this.y, 16.5,2.5)
    fill(255,0,0)
    rect(this.x+0.25,this.y+0.25,16,2)
    */
    //}//first hit



    if(this.x>=weaponx+5 && this.x<=weaponx+25 && charactery >= this.y-40 && charactery<=this.y +40 && adjust == 0 && rotated == true && this.health == 100){
      console.log("hit!"+this.health)
    this.health=75
    }

    if(this.x>= weaponx-25 && this.x<= weaponx-5 && charactery >= this.y-40 && charactery<=this.y +40 && adjust == 4 && rotated == true && this.health == 100){
        console.log("hit!")
        this.health=75
      }//first hit


        if(this.x>=weaponx+5 && this.x<=weaponx+25 && charactery >= this.y-40 && charactery<=this.y +40 && adjust == 0 && rotated == true && this.health == 75){
        this.health=50
        }//second hit
          if(this.x>= weaponx-25 && this.x<= weaponx-5 && charactery >= this.y-40 && charactery<=this.y +40 && adjust == 4 && rotated == true && this.health == 75){
        this.health=50
        }//second hit


    if (this.x>=weaponx+5 && this.x<=weaponx+25 && charactery >= this.y-40 && charactery<=this.y +40 && adjust == 0 && rotated == true && this.health == 50) {
         score1=score1+1;
         this.scored = true;
         console.log("score!")
         this.x=this.x+1500
       }
    if(this.x>= weaponx-25 && this.x<= weaponx-5 && charactery >= this.y-40 && charactery<=this.y +40 && adjust == 4 && rotated == true && this.health == 50) {
      score1=score1+1;
      this.scored = true;
      this.x=this.x+1500
      console.log("score!")
        }
    }


    attackZombies(){
      if(characterx-this.x<=30 && characterx-this.x>-30 && charactery-this.y<=50 && charactery-this.y>-50){
        this.attack=this.attack-1
      }
    }

    healthLoss(){
      //console.log(this.attack)
    if(this.attack>=1){
        characterHealth=characterHealth
      }
      if(this.attack<1){
      characterHealth=characterHealth-1
        this.attack=50
      }
    else{
    characterHealth=characterHealth
    }
  }

  gameOver(){
    if(characterHealth==0){
      this.x=this.x+1500
    }
  }

    /*function zombieHit(){
      this.y=this.y+5
      this.x=this.x+5
      characterHealth=characterHealth-1
    }*/
}
