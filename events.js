let MOUSEX = 0;
let MOUSEY = 0;

window.addEventListener('mousedown', ev => {
    createAction('mousedown', ev);
});

window.addEventListener('mouseup', ev => {
    createAction('mouseup', ev);
});

window.addEventListener('resize', ev => {
    createAction('resize', ev);
});

window.addEventListener('mousemove', ev => {
    createAction('mousemove', ev);
});

//Change this to a subscription model where if you have the methods defined you are subscribed?
function createAction(type, ev) {
    switch (type ) {
        case 'mousepos':
            {
                let allClicked = AllInstances.filter(
                    ui => ui.underPoint(ev.clientX, ev.clientY)
                );

                if (allClicked.lengt == 0) {
                    return;
                }
                allClicked.forEach(ui => { if (ui.parent.methods.onHover) ui.parent.methods.onHover.bind(ui)();});
            }
        break;
        case 'mousemove':
            {
                MOUSEX = ev.clientX;
                MOUSEY = ev.clientY;
            }
        break;
        case 'mousedown':
            {
                let allClicked = AllInstances.filter(
                    ui => ui.underPoint(ev.clientX, ev.clientY)
                );

                if (allClicked.length == 0) {
                    return;
                }
                allClicked.forEach(ui => ui.parent.methods.mouseDown.bind(ui)());
            }
        break;
        case 'mouseup':
            {
                let allClicked = AllInstances.filter(
                    ui => ui.underPoint(ev.clientX, ev.clientY)
                );

                if (allClicked.length == 0) {
                    return;
                }
                allClicked.forEach(ui => ui.parent.methods.mouseUp.bind(ui)());
            }
        break;
        case 'resize':
            {
                AllInstances.forEach(ui => ui.parent.methods.onResize.bind(ui)());
            }
        break;
        default:
            console.log('unkonwn event');
        break;
    }
}

function event(name){
    this.name = name;
}
