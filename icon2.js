let icon2 = new SVGui({
    svg: `
	<path  fill="#498de5" fill-opacity="{{alpha}}" d="M30,0H2C0.895,0,0,0.895,0,2v28c0,1.105,0.895,2,2,2h28c1.105,0,2-0.895,2-2V2C32,0.895,31.105,0,30,0z
		 M31,29c0,1.105-0.895,2-2,2H3c-1.105,0-2-0.895-2-2V9h30V29z M31,8H1V3c0-1.105,0.895-2,2-2h26c1.105,0,2,0.895,2,2V8z"/>
	<circle  fill="#498de5" fill-opacity="{{alpha}}" cx="4.5" cy="4.5" r="0.5"/>
	<circle  fill="#498de5" fill-opacity="{{alpha}}" cx="7.5" cy="4.5" r="0.5"/>
	<circle  fill="#498de5" fill-opacity="{{alpha}}" cx="10.5" cy="4.5" r="0.5"/>
    `,
            state: {
                alpha: -0.15,
            },
            methods: {
                mouseDown: function() {
                    this.state.alpha = 0.1;
                },
                mouseUp: function() {
                },
                fadeIn: function(speed) {
                    this.state.alpha += speed;
                    if (this.state.alpha > 0.8) {
                        this.state.alpha = 0.8;
                    }
                },
                onResize: () => {},
            }
        });