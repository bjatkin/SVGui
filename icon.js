let icon = new SVGui({
	svg: `<path fill="#498de5" fill-opacity="{{alpha}}" d="M32,2c0-1.105-0.895-2-2-2H19c-1.105,0-2,0.895-2,2v28c0,1.105,0.895,2,2,2h11c1.105,0,2-0.895,2-2V2z
		 M31,29c0,1.105-0.895,2-2,2h-9c-1.105,0-2-0.895-2-2V3c0-1.105,0.895-2,2-2h9c1.105,0,2,0.895,2,2V29z"/>
	<path fill="#498de5" fill-opacity="{{alpha}}" d="M15,2c0-1.105-0.895-2-2-2H2C0.895,0,0,0.895,0,2v11c0,1.105,0.895,2,2,2h11c1.105,0,2-0.895,2-2V2z M14,12
		c0,1.105-0.895,2-2,2H3c-1.105,0-2-0.895-2-2V3c0-1.105,0.895-2,2-2h9c1.105,0,2,0.895,2,2V12z"/>
	<path fill="#498de5" fill-opacity="{{alpha}}" d="M15,19c0-1.105-0.895-2-2-2H2c-1.105,0-2,0.895-2,2v11c0,1.105,0.895,2,2,2h11c1.105,0,2-0.895,2-2V19z
		 M14,29c0,1.105-0.895,2-2,2H3c-1.105,0-2-0.895-2-2v-9c0-1.105,0.895-2,2-2h9c1.105,0,2,0.895,2,2V29z"/>`,
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
                    if (this.state.alpha > 1) {
                        this.state.alpha = 1;
                    }
                },
                onResize: () => {},
            }
        });