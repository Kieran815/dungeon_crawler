class Entity {
  constructor(x, y, size, attr) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.attr = {...attr};
  }

  action(verb, world) {
    console.log(`Verb: ${verb}`)
  }

  draw(context) {
    context.fillStyle = this.attr.color || "green";
    context.textBaseLine = "hanging";
    context.fillText(
      this.attr.ascii,
      this.x * this.size + (this.attr.offset ? this.attr.offset.x : 0),
      this.y *this.size + (this.attr.offset ? this.attr.offset.y : 0)
    );
  }
}

export default Entity;
