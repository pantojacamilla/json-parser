    class SearchForm extends React.Component{&#xD;&#xA;    			constructor(props) {&#xD;&#xA;    				super(props);&#xD;&#xA;    				this.state = {input_term_value: "",spaces_list: ""};&#xD;&#xA;    			}&#xD;&#xA;    			componentDidMount() {&#xD;&#xA;    				var space_change_value = "";&#xD;&#xA;    				$("input.sp-autocomplete-spaces").change(function() {&#xD;&#xA;    					space_change_value = $(this).val();&#xD;&#xA;    				});&#xD;&#xA;    				this.setState({spaces_list: space_change_value});&#xD;&#xA;    			}&#xD;&#xA;    			updateInputValue(evt){&#xD;&#xA;    				this.setState({input_term_value: evt.target.value});&#xD;&#xA;    			}&#xD;&#xA;    			componentDidUpdate (prevProps, prevState) {&#xD;&#xA;    			    this.sendGetRequest();&#xD;&#xA;    			}&#xD;&#xA;    			sendGetRequest(){&#xD;&#xA;    				var _this = this;&#xD;&#xA;    				this.serverRequest = &#xD;&#xA;    				axios