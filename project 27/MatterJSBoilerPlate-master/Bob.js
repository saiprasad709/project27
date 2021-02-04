class Bob {
    constructor(x,y){
        var options ={
            isStatic:false,
            restitution:1,
            friction:0,
            density:7.8,
        }
        this.body = Bodies.circle(x,y,25,options);
        World.add(world,this.body);
        this.body.position.y=y;
        this.body.position.x=x;

        console.log(this.body);
    }
    display(){
        push();
        ellipseMode(RADIUS);
        fill(254,0,255);
        ellipse(this.body.position.y,this.body.position.x,25,25);
        pop();
    }
}