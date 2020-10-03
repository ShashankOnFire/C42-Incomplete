class Plinko {
  constructor(x,y,r) {
    var options ={
      'restitution' : 0.8,
      'density' : 0.5,
      isStatic : false
    }
    this.body = Bodies.circle(x,y,r,options);
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color(random(0,255), random(255), random(255));

    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;

    push();
    strokeWeight(5);
    stroke(this.color);
    ellipse(pos.x, pos.y, this.r)
    noFill();
    pop();
  }
}
