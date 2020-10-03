class Clouds {
  constructor(x, y, w, h) {
    var options = {
      isStatic : false
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.image = loadImage("images/cloud.png")

    World.add(world, this.body);
  }
    display() {
      var pos = this.body.position;

      push();
      rectMode(CENTER);
      image(this.image, pos.x, pos.y);
      rect(pos.x, pos.y, this.w, this.h);
      pop();
    }
}
