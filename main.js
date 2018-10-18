let AllInstances = [];

function SVGui(construct = {}) {
    this.svg = construct.svg;
    this.x = 0;
    this.y = 0;
    if (construct.state){
        this.state = construct.state;
    }
    if (construct.methods) {
        this.methods = construct.methods;
    }
    
    this.layer = 0;
}

SVGui.prototype.methods = {
    mouseDown: () => {},
    mouseUp: () => {}
};

SVGui.prototype.instantiate = function(state) {
    if (!state) {
        state = this.state;
    }
    return new SVGuiInstance(this, state);
};

function SVGuiInstance(parent, state) {
    this.parent = parent;
    this.state = state;
    this.x = 0;
    this.y = 0;
    AllInstances.push(this);
}

SVGuiInstance.prototype.render = function() {
    let render = this.parent.svg;
    for (var prop in this.state) {
        if (this.state.hasOwnProperty(prop)) {
            render = render.replace(new RegExp('{{'+prop+'}}', "g"), this.state[prop]);
        }
    }
    return `<g transform="translate(${this.x},${this.y})">`+render+'</g>';
};

SVGuiInstance.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    renderView();
}

SVGuiInstance.prototype.underPoint = function(x, y) {
    console.log(x, y);
    console.log(x > this.x && x < this.x + 300 && y > this.y && y < this.y + 100);
    return (x > this.x && x < this.x + 300 && y > this.y && y < this.y + 100);
}
