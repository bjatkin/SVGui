let bar = new SVGui({
	svg: `<path fill="{{color}}" fill-opacity="{{alpha}}" d="M0 0 L10 0 L10 -{{tall}} L0 -{{tall}} Z"/>`,
            state: {
                alpha: -0.1,
                tall: 50,
                scaler: 1,
                defaultScaler: 1,
                offset: 0,
                color: '#498de5',
            },
            methods: {
                mouseDown: function() {
                    console.log('clicked');
                },
                mouseUp: function() {
                },
                fadeIn: function(speed) {
                    this.state.alpha += speed;
                    if (this.state.alpha > 0.2) {
                        this.state.alpha = 0.2;
                    }
                },
                jump: function(min, max) {
                    this.state.tall = this.state.scaler * ((Math.random() * (max - min)) + min);
                    if (this.state.scaler > this.state.defaultScaler) this.state.scaler -= 0.3;
                    if (this.state.scaler < this.state.defaultScaler) this.state.scaler = this.state.defaultScaler;
                    this.height = -this.state.tall;
                },
                onResize: function() {
                    this.x = this.state.offset;
                    this.y = $(window).height() - 15;
                },
                onHover: function() {
                    this.state.alpha = 0.4;
                    this.state.scaler = 4;
                }
            }
        });