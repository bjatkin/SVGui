let bar = new SVGui({
	svg: `<path fill="#498de5" fill-opacity="{{alpha}}" d="M0 0 L10 0 L10 -{{tall}} L0 -{{tall}} Z"/>`,
            state: {
                alpha: -0.1,
                tall: 50,
                scaler: 1,
                offset: 0,
            },
            methods: {
                mouseDown: function() {
                    this.state.alpha = 0.1;
                },
                mouseUp: function() {
                },
                fadeIn: function(speed) {
                    this.state.alpha += speed;
                    if (this.state.alpha > 0.2) {
                        this.state.alpha = 0.2;
                    } else {
                        renderView();
                    }
                },
                jump: function(min, max) {
                    this.state.tall = this.state.scaler * (Math.random() * (max - min)) + min;
                    renderView();
                },
                onResize: function() {
                    this.x = this.state.offset;
                    this.y = $(window).height() - 15;
                },
            }
        });