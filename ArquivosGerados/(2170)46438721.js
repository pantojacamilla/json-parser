    import React from 'react';&#xD;&#xA;    import {Field,reduxForm} from 'redux-form';&#xD;&#xA;    import {connect} from 'react-redux';&#xD;&#xA;    import _ from 'lodash';&#xD;&#xA;    // objects that will be used to create the form&#xD;&#xA;    const FIELDS = {&#xD;&#xA;      first_name: {&#xD;&#xA;        type: 'text',&#xD;&#xA;        label: 'First name',&#xD;&#xA;        onChange: function(e){&#xD;&#xA;          this.setstate({first_name:e.target.value})&#xD;&#xA;      },&#xD;&#xA;      last_name: {&#xD;&#xA;        type: 'text',&#xD;&#xA;        label: 'last name',&#xD;&#xA;        onChange: function(e){&#xD;&#xA;          this.setstate({last_name:e.target.value})&#xD;&#xA;      },&#xD;&#xA;      ...&#xD;&#xA;      }&#xD;&#xA;      &#xD;&#xA;      class App extends React.Component {&#xD;&#xA;        constructor(props) {&#xD;&#xA;          super(props);&#xD;&#xA;          this.state = {&#xD;&#xA;            first_name : '',&#xD;&#xA;            last_name : '',&#xD;&#xA;            birth : '',&#xD;&#xA;            sex:''&#xD;&#xA;          };&#xD;&#xA;        }&#xD;&#xA;        &#xD;&#xA;        renderField(field) {&#xD;&#xA;          const fieldConfig = FIELDS[field.input.name];&#xD;&#xA;          const {meta: {touched, error}} = field;&#xD;&#xA;          return (&#xD;&#xA;            <div className={`form-group ${touched && error ? 'has-danger' :''}`}>&#xD;&#xA;              <br />&#xD;&#xA;              <label>{fieldConfig.label}</label>&#xD;&#xA;              <input&#xD;&#xA;                {...fieldConfig}&#xD;&#xA;                {...field.input}&#xD;&#xA;              />&#xD;&#xA;              <div className='text-help'>{touched ? error : ""}</div>&#xD;&#xA;              <br />&#xD;&#xA;            </div>&#xD;&#xA;          );&#xD;&#xA;        }&#xD;&#xA;        onSubmit(){&#xD;&#xA;            ...&#xD;&#xA;        }&#xD;&#xA;        render() {&#xD;&#xA;          const {handleSubmit} = this.props;&#xD;&#xA;          return (&#xD;&#xA;            <div>&#xD;&#xA;             <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>&#xD;&#xA;                { _.keys(FIELDS).map( key => {&#xD;&#xA;                  return <Field name={key} key={key} component={this.renderField} />;&#xD;&#xA;                  })&#xD;&#xA;                }&#xD;&#xA;              <button type='submit'>Submit</button>&#xD;&#xA;            </form>&#xD;&#xA;          </div>&#xD;&#xA;        )&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    export default reduxForm({&#xD;&#xA;      // validate,&#xD;&#xA;      form: 'Form example'&#xD;&#xA;    })(&#xD;&#xA;      connect(null)(App)&#xD;&#xA;    );