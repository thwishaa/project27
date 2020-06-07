class rope {
    constructor(bodyA,bodyB){

    
    var options = {
        bodyA:bodyA,
        bodyB:bodyB,
        length:4,
        stiffness:0.04
    }
    //this.pointB = pointB;

    this.rope = Constraint.create(options);
    World.add(world,this.rope);

}
/*fly(){
    this.slingshot.bodyA = null;
}
*/
    

display()
{
    //if(this.slingshot.bodyA){

    
    var PointA = this.rope.bodyA.position;
    var PointB = this.rope.bodyB.position;
    strokeWeight (3);
    line(PointA.x,PointA.y,PointB.x,PointB.y);
    
}}