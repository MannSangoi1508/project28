class Tree {
    constructor(x, y) {
      var options = {
          isStatic:true,
          restitution:0,
          friction:1.0,
          density:1.2,
      }
      this.body = Bodies.rectangle(x, y, 300, 300, options);
      this.width = 300;
      this.height = 300;
      this.image=loadImage("sprites/tree.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
    
      rectMode(CENTER);
      strokeWeight(4);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };