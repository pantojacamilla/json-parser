            var CanvasAnimation = React.createClass({&#xD;&#xA;                loadData: function() {&#xD;&#xA;                    function animation() {&#xD;&#xA;                        var animation = this.state.data.map(function(data) {&#xD;&#xA;                            return(&#xD;&#xA;                                new CanvasSprite(document.getElementById(data.id), data.width, data.height, data.spriteSheetURL, data.rows, data.columns, data.totalFrames);&#xD;&#xA;                            );&#xD;&#xA;                        });&#xD;&#xA;                    };&#xD;&#xA;                    fetch("data.json")&#xD;&#xA;                    .then(function(response) {&#xD;&#xA;                        return response.json&#xD;&#xA;                        .then(function(json){&#xD;&#xA;                            this.setState({data: json, animation()});&#xD;&#xA;                        }.bind(this))&#xD;&#xA;                    }.bind(this));&#xD;&#xA;                },&#xD;&#xA;                componentDidMount: function() {&#xD;&#xA;                    this.loadData();&#xD;&#xA;                },&#xD;&#xA;                handleInteraction: function(e) {&#xD;&#xA;                    var offsetY = e.clientY - e.node.getBoundingClientRect().top;&#xD;&#xA;                    var relY = offsetY/this.state.data.height;&#xD;&#xA;                    this.props.animation.setFrame(relY);&#xD;&#xA;                },&#xD;&#xA;                render: function() {&#xD;&#xA;                    var canvases = this.state.data.map(function(data) {&#xD;&#xA;                        return (&#xD;&#xA;                            <canvas id={data.id} &#xD;&#xA;                                width={data.width} &#xD;&#xA;                                height={data.height}&#xD;&#xA;                                style={border:5px white}&#xD;&#xA;                                onMouseOver={this.handleInteraction}>&#xD;&#xA;                            </canvas>&#xD;&#xA;                        );&#xD;&#xA;                    });&#xD;&#xA;                    return(&#xD;&#xA;                        <div>{canvases}</div>&#xD;&#xA;                    );&#xD;&#xA;                }&#xD;&#xA;            };&#xD;&#xA;                                    &#xD;&#xA;            ReactDOM.render(&#xD;&#xA;                <CanvasAnimation />,&#xD;&#xA;                document.getElementById('content')&#xD;&#xA;            );