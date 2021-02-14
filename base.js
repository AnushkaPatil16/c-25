class BASE{
    constructor(x,y,w,h,a){
        var ops = {
            restitution:0.7,
            friction:1.4
        }
        this.body = Bodies.rectangle(x,y,w,h,ops);
        this.width = w;
        this.height = h;
        this.image = loadImage("sprites/base.png");
        World.add(myworld,this.body);
    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop()
    }
}