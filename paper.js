class Paper
{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            desnity:1.2

        }

    this.x=x;
    this.r=r;
    this.y=y;
    this.image = loadImage("paper.png");
    this.body = Bodies.circle(this.x,this.y,this.r/2-10,options)

    World.add(world,this.body)
    }

    display(){
        var pos = this.body.position
        push();
        translate(pos.x,pos.y)
        imageMode(CENTER)
        image(this.image,0,0,this.r,this.r)
        pop();

    }
}