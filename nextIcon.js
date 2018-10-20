let nextIcon = new SVGui({
    svg: `<path fill="{{color}}" fill-opacity="{{alpha}}" d="M4,8v16l8-4v4l12-6v4c0,1.105,0.895,2,2,2s2-0.895,2-2v-6v-6c0-1.105-0.895-2-2-2s-2,0.895-2,2v4L12,8v4L4,8
	z M5,10l8,3.692V12.5V10l12,5.538V14.5V10c0-0.552,0.448-1,1-1s1,0.448,1,1v5.5v1V22c0,0.552-0.448,1-1,1s-1-0.448-1-1v-4.5v-1.038
	L13,22v-2.5v-1.192L5,22V10z"/>`,
            state: {
                alpha: -0.1,
                offset: 0,
                watch: null,
                flip: false,
                color: '#498de5',
                state: 0,
            },
            methods: {
                mouseDown: function() {
                    this.state.alpha = 0.1;
                },
                mouseUp: function() {
                },
                fadeIn: function(speed) {
                    this.state.alpha += speed;
                    if (this.state.alpha > 0.6) {
                        this.state.alpha = 0.6;
                    }
                },
                onResize: function() {
                    if ($(window).width() >= 600) {
                        if (this.state.state == 1) {
                            this.state.transitionX = new Animate({
                                keys: [0, 20],
                                values: [this.x, this.state.watch.x + this.state.offset],
                            });
                            this.state.transitionY = new Animate({
                                keys: [0, 20],
                                values: [this.y, this.state.watch.y + 30],
                            });
                        } else {
                            if (this.state.transitionX.frame > 20) {
                                this.x = this.state.watch.x + this.state.offset;
                                this.y = this.state.watch.y + 30;
                                this.state.transitionX = {frame: 100};
                                this.state.transitionY = {frame: 100};
                            } else {
                                this.state.transitionX.values[1] = this.state.watch.x + this.state.offset;
                                this.state.transitionY.values[1] = this.state.watch.y + 30;
                            }
                        }
                        this.xScale = (this.state.flip ? 5 : -5);
                        this.yScale = 5;
                        this.state.state = 0;
                    } else {
                        if (this.state.state == 0){
                            this.state.transitionX = new Animate({
                                keys: [0, 10],
                                values: [this.x, this.state.watch.x + 95],
                            });
                            this.state.transitionY = new Animate({
                                keys: [0, 10],
                                values: [this.y, this.state.watch.y + 180],
                            });
                        } else {
                            if (this.state.transitionX.frame > 20) {
                                this.x = this.state.watch.x + 95;
                                this.y = this.state.watch.y + 180;
                                this.state.transitionX = {frame: 100};
                                this.state.transitionY = {frame: 100};
                            } else {
                                this.state.transitionX.values[1] = this.state.watch.x + 95;
                                this.state.transitionY.values[1] = this.state.watch.y + 180;
                            }
                        }
                        this.xScale = (this.state.flip ? 3 : -3);
                        this.yScale = 3;
                        this.state.state = 1;
                    }
                },
                transition: function() {
                    if (this.state.transitionX.nextFrame){
                        this.x = this.state.transitionX.nextFrame();
                        this.y = this.state.transitionY.nextFrame();
                    }
                },
                onHover: function() {
                }
            }
        });