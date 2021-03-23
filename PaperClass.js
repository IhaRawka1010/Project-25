class PaperClass{
    constructor(x,y){
        var options={
            'isStatic':false,
            'restitution': 0.3,
            'friction':0,
            'density':1.2
        }
        this.x=x;
		this.y=y;
        
        this.image=loadImage("paper.png");
        this.body=Bodies.circle(this.x, this.y, 20, options);
		World.add(world, this.body);
    }
    display(){
        push();
        var pos = this.body.position;
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 60, 60);
        pop();
    }
}