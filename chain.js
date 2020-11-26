class Chain{
    constructor(bodyA , pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 200
        }
        
        this.body = Constraint.create(options);
        this.pointB  = pointB;
        World.add(world , this.body);
    }
    display(){
        var point1 = this.body.bodyA.position;
        var point2 = this.pointB;
        push()
        strokeWeight(10);
        stroke("white")
        line( point2.x , point2.y,point1.x, point1.y );
        pop ()
    }

}
