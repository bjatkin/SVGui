let AllInstances = [];

function SVGui(construct = {}) {
    this.svg = construct.svg;
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
    mouseUp: () => {},
    onResize: () => {},
};

SVGui.prototype.instantiate = function(state) {
    if (!state) {
        state = JSON.parse(JSON.stringify(this.state));
    }
    return new SVGuiInstance(this, state);
};

function SVGuiInstance(parent, state) {
    this.parent = parent;
    this.state = state;
    this.x = 0;
    this.y = 0;
    this.xScale = 1;
    this.yScale = 1;
    this.width = 100;
    this.height = 100;
    AllInstances.push(this);
}

SVGuiInstance.prototype.render = function() {
    let render = this.parent.svg;
    for (var prop in this.state) {
        if (this.state.hasOwnProperty(prop)) {
            render = render.replace(new RegExp('{{'+prop+'}}', "g"), this.state[prop]);
        }
    }
    return `<g transform="translate(${this.x},${this.y}) scale(${this.xScale},${this.yScale})">`+render+'</g>';
};

SVGuiInstance.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    renderView();
}

SVGuiInstance.prototype.scale = function(x, y) {
    this.xScale += x;
    this.yScale += y;
    renderView();
}

SVGuiInstance.prototype.underPoint = function(x, y) {
    if (this.xScale > 0){
        return (x > this.x && x < this.x + this.width * this.xScale && y > this.y && y < this.y + this.height * this.yScale);
    }
    return (x < this.x && x > this.x + this.width * this.xScale && y > this.y && y < this.y + this.height * this.yScale);
}
