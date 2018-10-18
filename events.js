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
        default:
            console.log('unkonwn event');
        break;
    }
    renderView();
}

function event(name){
    this.name = name;
}
