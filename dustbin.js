class Dustbin {
    constructor(x, y){
        var options = {
            isStatic: true
        }

        this.width = 200;
        this.height = 100;
        this.wallThickness = 20
        this.angle = 0;

        this.bottomWall = Bodies.rectangle(x, y, this.width, this.wallThickness, options);

        this.leftWall = Bodies.rectangle(x-70, y-40, this.wallThickness, this.height, options);
         Matter.Body.setAngle(this.leftWall, this.angle);

        this.rightWall = Bodies.rectangle(x+70, y-40,this.wallThickness, this.height, options);
        Matter.Body.setAngle(this.rightWall, -1*this.angle);

        this.image = loadImage("dustbin.png");

        World.add(world, this.bottomWall);
        World.add(world, this.leftWall);
        World.add(world, this.rightWall);

    }

    display(){

        var bottomPos = this.bottomWall.position;
        var leftPos = this.leftWall.position;
        var rightPos = this.rightWall.position;

        push();
        translate(leftPos.x, leftPos.y);
        rotate(this.angle);
        rectMode(CENTER);
        fill("yellow");
        rect(0,0,this.wallThickness, this.height);
        pop();

        push();
        translate(rightPos.x, rightPos.y);
        rotate(-1*this.angle);
        rectMode(CENTER);
        fill("yellow");
        rect(0,0,this.wallThickness, this.height);
        pop();

        push();
        translate(bottomPos.x, bottomPos.y);
        imageMode(CENTER);
        fill("yellow");
        image(this.image ,0,-90, 230, 240);
        pop();

     
    }
}