class String{
    constructor(body1,body2,pointX,pointY){
        this.pointX = pointX;
        this.pointY = pointY;
        var options ={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.pointX, y:this.pointY}
        }
        this.rope = Matter.Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var A_pos = this.rope.bodyA.position;
        var B_pos = this.rope.bodyB.position;
        strokeWeight(5);
        line(A_pos.x,A_pos.y,B_pos.x + this.pointX,B_pos.y + this.pointY);
    }
}