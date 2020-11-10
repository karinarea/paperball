class Dustbin {
    //PROPERTIES
    constructor(x, y, w, h){
        var options = {
            restitution: 0,
            friction: 0.5,
            density: 1,
            isStatic: true
        };
        //box1.body
        this.body = Bodies.rectangle(x, y, w, h, options, {isStatic: true});
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }

    //FUNCTIONS
    display(){
        //Add this new setting
        push();
        rectMode(CENTER);
        fill("red");
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rect(0,0, this.width, this.height);
        //Revert to the old setting - without translate & rotate
        pop();
    }

}
