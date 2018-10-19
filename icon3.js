let icon3 = new SVGui({
    svg: `<path  fill="#498de5" fill-opacity="{{alpha}}" d="M30,0H2C0.895,0,0,0.895,0,2v16v12c0,1.105,0.895,2,2,2h12h4h12c1.105,0,2-0.895,2-2V18V2
	C32,0.895,31.105,0,30,0z M3,31c-1.105,0-2-0.895-2-2v-9h9c1.105,0,2,0.895,2,2v9H3z M31,29c0,1.105-0.895,2-2,2h-9v-9
	c0-1.105,0.895-2,2-2h9V29z M30,19h-9c-1.105,0-2,0.895-2,2v10h-6V21c0-1.105-0.895-2-2-2H2c-0.366,0-0.705,0-1,0V3
    c0-1.105,0.895-2,2-2h26c1.105,0,2,0.895,2,2v16C30.705,19,30.366,19,30,19z"/>`,
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
                    } else {
                        renderView();
                    }
                },
                onResize: () => {},
            }
        })