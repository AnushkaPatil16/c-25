class GROUND{
    constructor(x,y){
        var ops = {
            isStatic:true
        }

        this.ground = Bodies.rectangle(x,y,1200,20,ops);
        this.w = 1200;
        this.h = 20;
        World.add(myworld,this.ground);
  }

    Anushka (){
        var pos = this.ground.position;
        fill("brown");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
        
    }

}


