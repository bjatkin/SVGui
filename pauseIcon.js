let pauseIcon = new SVGui({
	svg: `<path fill="{{color}}" fill-opacity="{{alpha}}" d="M16,0C7.163,0,0,7.163,0,16s7.163,16,16,16s16-7.163,16-16S24.837,0,16,0z M16,31C7.716,31,1,24.284,1,16
		C1,7.716,7.716,1,16,1s15,6.716,15,15C31,24.284,24.284,31,16,31z"/>
	<path fill="{{color}}" fill-opacity="{{alpha}}" d="M12,8h-1c-1.105,0-2,0.895-2,2v12c0,1.105,0.895,2,2,2h1c1.105,0,2-0.895,2-2V10C14,8.895,13.105,8,12,8z
		 M13,21.529C13,22.342,12.342,23,11.529,23h-0.059C10.658,23,10,22.342,10,21.529V10.471C10,9.658,10.658,9,11.471,9h0.059
		C12.342,9,13,9.658,13,10.471V21.529z"/>
	<path fill="{{color}}" fill-opacity="{{alpha}}" d="M21,8h-1c-1.105,0-2,0.895-2,2v12c0,1.105,0.895,2,2,2h1c1.105,0,2-0.895,2-2V10C23,8.895,22.105,8,21,8z
		 M22,21.529C22,22.342,21.342,23,20.529,23h-0.059C19.658,23,19,22.342,19,21.529V10.471C19,9.658,19.658,9,20.471,9h0.059
        C21.342,9,22,9.658,22,10.471V21.529z"/>`,
            state: {
                alpha: -0.1,
                play: false,
                color: '#498de5',
            },
            methods: {
                mouseDown: function() {
                    this.state.alpha = 0.1;
                    if (this.state.play) {
                        this.parent.svg = pauseSVG;
                    } else {
                        this.parent.svg = playSVG;
                    }
                    this.state.play = !this.state.play;
                },
                mouseUp: function() {
                },
                fadeIn: function(speed) {
                    this.state.alpha += speed;
                    if (this.state.alpha > 1) {
                        this.state.alpha = 1;
                    }
                },
                onResize: function() {
                    this.x = $(window).width() / 2 - 90;
                    this.y = $(window).height() / 2 - 90;
                },
            }
        });

//How can we flip stuff out on te fly?
//Store the svg data on the instance?
let playSVG = `<path  fill="{{color}}" fill-opacity="{{alpha}}" d="M16,0C7.163,0,0,7.163,0,16s7.163,16,16,16s16-7.163,16-16S24.837,0,16,0z M16,31C7.716,31,1,24.284,1,16
		C1,7.716,7.716,1,16,1s15,6.716,15,15C31,24.284,24.284,31,16,31z"/>
    <path  fill="{{color}}" fill-opacity="{{alpha}}" d="M10,24l12-8L10,8V24z M11,10l9,6l-9,6V10z"/>`

let pauseSVG = `<path fill="{{color}}" fill-opacity="{{alpha}}" d="M16,0C7.163,0,0,7.163,0,16s7.163,16,16,16s16-7.163,16-16S24.837,0,16,0z M16,31C7.716,31,1,24.284,1,16
		C1,7.716,7.716,1,16,1s15,6.716,15,15C31,24.284,24.284,31,16,31z"/>
	<path fill="{{color}}" fill-opacity="{{alpha}}" d="M12,8h-1c-1.105,0-2,0.895-2,2v12c0,1.105,0.895,2,2,2h1c1.105,0,2-0.895,2-2V10C14,8.895,13.105,8,12,8z
		 M13,21.529C13,22.342,12.342,23,11.529,23h-0.059C10.658,23,10,22.342,10,21.529V10.471C10,9.658,10.658,9,11.471,9h0.059
		C12.342,9,13,9.658,13,10.471V21.529z"/>
	<path fill="{{color}}" fill-opacity="{{alpha}}" d="M21,8h-1c-1.105,0-2,0.895-2,2v12c0,1.105,0.895,2,2,2h1c1.105,0,2-0.895,2-2V10C23,8.895,22.105,8,21,8z
		 M22,21.529C22,22.342,21.342,23,20.529,23h-0.059C19.658,23,19,22.342,19,21.529V10.471C19,9.658,19.658,9,20.471,9h0.059
        C21.342,9,22,9.658,22,10.471V21.529z"/>`;