class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage('sprites/sling1.png');
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    display(){ 
        if(this.sling.bodyA){ var pointA = this.sling.bodyA.position; var pointB = this.pointB; strokeWeight(4); 
            stroke("turquoise"); 
            line(pointA.x, pointA.y, pointB.x, pointB.y); 
        } 
    } 
    
    fly(){
        this.sling.bodyA = null;
    }
}