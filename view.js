function renderView() {
    let svgData = allElements.reduce((acc, element) => acc += element.render(), '');

    let screen = $('#main');
    screen.empty();
    screen.height($( window ).height());
    screen.append('<svg width="100%" height="100%">'+svgData+'</svg>')
}

$(document).ready(function() {
    renderView();
});