let allElements = [];
let store = {
    dispatch: function(event) {
    }
};

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
    allElements.push(this);
    
    this.layer = 0;
}

SVGui.prototype.methods = {
    mouseDown: () => {},
    mouseUp: () => {}
};

SVGui.prototype.underPoint = function(x, y) {
    console.log(x, y);
    console.log(x > this.x && x < this.x + 300 && y > this.y && y < this.y + 100);
    return (x > this.x && x < this.x + 300 && y > this.y && y < this.y + 100);
}

SVGui.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    renderView();
};

SVGui.prototype.render = function() {
    let render = this.svg;
    for (var prop in this.state) {
        if (this.state.hasOwnProperty(prop)) {
            render = render.replace(new RegExp('{{'+prop+'}}', "g"), this.state[prop]);
        }
    }
    return `<g transform="translate(${this.x},${this.y})">`+render+'</g>';
};

window.addEventListener('mousedown', ev => {
    createAction('mousedown', ev);
});

window.addEventListener('mouseup', ev => {
    createAction('mouseup', ev);
});

function createAction(type, ev) {
    switch (type ) {
        case 'mousedown':
            {
                let allClicked = allElements.filter(
                    ui => ui.underPoint(ev.clientX, ev.clientY)
                );

                if (allClicked.length == 0) {
                    return;
                }
                allClicked.forEach(ui => ui.methods.mouseDown.bind(ui)());
            }
        break;
        case 'mouseup':
            {
                let allClicked = allElements.filter(
                    ui => ui.underPoint(ev.clientX, ev.clientY)
                );

                if (allClicked.length == 0) {
                    return;
                }
                allClicked.forEach(ui => ui.methods.mouseUp.bind(ui)());
            }
        break;
        default:
            console.log('unkonwn event');
        break;
    }
    renderView();
}

function event(name){
    this.name = name;
}

