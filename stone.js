class Stone{
    constructor(x,y){
        var options={
            restitution:0.8,
            friction:0.9,
            density:12
        }

        this.body = Bodies.rectangle(x,y,100,70,options);
        this.w=100;
        this.h=70;
        World.add(world,this.body);
    }

    display(){
        push();
         translate(this.body.position.x,this.body.position.y);
         strokeWeight(4);
         stroke("black");
         fill("grey");
         rotate(this.body.angle);
         rectMode(CENTER);
         rect(0,0,this.w, this.h);
        pop();
    }
}
    