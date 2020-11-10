class Paper {
    constructor(x,y,r) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.radius = r;
        this.body = Bodies.circle(x, y,this.radius/2, options);
        
       
        
        World.add(world, this.body);
      }
      display(){
       
        push();
        fill("red");
        translate(this.body.position.x, this.body.position.y);
       ellipse(0, 0,this.radius,this.radius);
       this.body.addImg("paper.png");
        pop();
      }
    
       
    
}