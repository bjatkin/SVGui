let nextIcon = new SVGui({
    svg: `<path fill="#498de5" fill-opacity="{{alpha}}" d="M4,8v16l8-4v4l12-6v4c0,1.105,0.895,2,2,2s2-0.895,2-2v-6v-6c0-1.105-0.895-2-2-2s-2,0.895-2,2v4L12,8v4L4,8
	z M5,10l8,3.692V12.5V10l12,5.538V14.5V10c0-0.552,0.448-1,1-1s1,0.448,1,1v5.5v1V22c0,0.552-0.448,1-1,1s-1-0.448-1-1v-4.5v-1.038
	L13,22v-2.5v-1.192L5,22V10z"/>`,
            state: {
                alpha: -0.1,
                offset: 0,
                watch: null,
                flip: false,
                goalX: 0,
                goalY: 0,
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
                    } else {
                        renderView();
                    }
                },
                onResize: function() {
                    if ($(window).width() >= 600) {
                        this.x = this.state.watch.x + this.state.offset;
                        this.y = this.state.watch.y + 30;
                        this.xScale = (this.state.flip ? 5 : -5);
                        this.yScale = 5;
                    } else {
                        console.log('the other case');
                        this.x = this.state.watch.x + 95;
                        this.y = this.state.watch.y + 180;
                        this.xScale = (this.state.flip ? 3 : -3);
                        this.yScale = 3;
                    }
                },
            }
        });