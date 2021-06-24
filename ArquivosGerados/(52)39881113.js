    class Home extends React.Component {&#xD;&#xA;      constructor(props) {&#xD;&#xA;        super(props);&#xD;&#xA;        this.state = {&#xD;&#xA;          style: {&#xD;&#xA;            transform: 'translateY(0)'&#xD;&#xA;          }&#xD;&#xA;        };&#xD;&#xA;        this.parallax = this.parallax.bind(this);&#xD;&#xA;      }&#xD;&#xA;      componentDidMount() {&#xD;&#xA;        window.addEventListener('scroll', this.parallax);&#xD;&#xA;      }&#xD;&#xA;      componentWillUnMount() {&#xD;&#xA;        window.removeEventListener('scroll', this.parallax);&#xD;&#xA;      }&#xD;&#xA;      parallax() {&#xD;&#xA;        function onScroll() {&#xD;&#xA;          let scrolled = window.pageYOffset;&#xD;&#xA;          this.setState({&#xD;&#xA;            style: {&#xD;&#xA;              transform: `translateY(${scrolled})`&#xD;&#xA;            }&#xD;&#xA;          });&#xD;&#xA;        }&#xD;&#xA;        if(window.pageYOffset < window.innerHeight) {&#xD;&#xA;          window.requestAnimationFrame(onScroll.bind(this));&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      render() {&#xD;&#xA;        return (&#xD;&#xA;          <div className="home-wrapper" style={this.state.style}>&#xD;&#xA;          </div>&#xD;&#xA;        );&#xD;&#xA;      }&#xD;&#xA;    }