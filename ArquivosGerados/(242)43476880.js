    class Test extends Component {&#xD;&#xA;      constructor(props) {&#xD;&#xA;        super(props)&#xD;&#xA;        this.state = {&#xD;&#xA;          first_name: '',&#xD;&#xA;          last_name: '',&#xD;&#xA;          firstNameValid: true,&#xD;&#xA;          lastNameValid: true&#xD;&#xA;        };&#xD;&#xA;  &#xD;&#xA;        this.validateInputLength = this.validateInputLength.bind(this);&#xD;&#xA;      }&#xD;&#xA;      componentDidMount() {&#xD;&#xA;        this.validateInputLength(this.state.first_name, 'firstNameValid');&#xD;&#xA;        this.validateInputLength(this.state.last_name, 'lastNameValid');&#xD;&#xA;      }&#xD;&#xA;      validateInputLength(value, inputType) {&#xD;&#xA;        if (value.length <= 0) {&#xD;&#xA;          this.setState({&#xD;&#xA;            inputType: false&#xD;&#xA;          });&#xD;&#xA;        } else {&#xD;&#xA;          this.setState({&#xD;&#xA;            inputType: true&#xD;&#xA;          });&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      render() {&#xD;&#xA;        ........&#xD;&#xA;      }&#xD;&#xA;    }