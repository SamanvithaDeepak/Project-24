class Iron{
    constructor(x,y,w,h){
        var options={
            restitution:0.8,
            friction:3,
            density:30
       }

       this.body = Bodies.rectangle(x,y,w,h,options);
       this.width = w;
       this.height = h;
       World.add(world,this.body);
    }

    display(){
        push();
         translate(this.body.position.x,this.body.position.y);
         strokeWeight(4);
         stroke("black");
         fill("red");
         rotate(this.body.angle);
         rectMode(CENTER);
         rect(0,0,this.width, this.height);
        pop();
    }
}