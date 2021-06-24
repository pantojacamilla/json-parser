    function Login( props ) {&#xD;&#xA;      return (&#xD;&#xA;        <Popover id={ props.id } title={ <LoginTitle /> }>&#xD;&#xA;          <div className="form-group row">&#xD;&#xA;            <input className="dontHaveAcctCheckbox" type="checkbox" />&#xD;&#xA;            <label>I don't have an account, yet</label>&#xD;&#xA;          </div>&#xD;&#xA;          <div className="form-group row">&#xD;&#xA;            <label className="col-sm-3 col-xs-3 control-label">Email: </label>&#xD;&#xA;            <input type="email" className="email col-sm-8 col-xs-8" />&#xD;&#xA;          </div>&#xD;&#xA;          <div className="form-group row">&#xD;&#xA;            <label className="col-sm-3 col-xs-3 control-label">Password: </label>&#xD;&#xA;            <input type="password" className="password col-sm-8 col-xs-8" />&#xD;&#xA;          </div>&#xD;&#xA;          <button type="button" className="loginButton btn btn-default">&#xD;&#xA;            Login&#xD;&#xA;          </button>&#xD;&#xA;          <button&#xD;&#xA;            type="button"&#xD;&#xA;            className="createAcctButton btn btn-default"&#xD;&#xA;            style={{ display: "none" }}>&#xD;&#xA;              Create Account&#xD;&#xA;          </button>&#xD;&#xA;        </Popover>&#xD;&#xA;      )&#xD;&#xA;    }