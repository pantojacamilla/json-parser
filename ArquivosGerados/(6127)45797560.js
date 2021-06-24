    class Child extends React.Component {&#xD;&#xA;      componentDidUpdate(prev) {&#xD;&#xA;        if (!prev.isActive && this.props.isActive) {&#xD;&#xA;          console.log('activated', this.props.children);&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      render() {&#xD;&#xA;        return (&#xD;&#xA;          <span&#xD;&#xA;            className={this.props.isActive ? 'child active' : 'child'}&#xD;&#xA;            onClick={this.props.onClick}&#xD;&#xA;          >&#xD;&#xA;            {this.props.children}&#xD;&#xA;          </span>&#xD;&#xA;        );&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    const Child1 = props => (&#xD;&#xA;      <Child&#xD;&#xA;        isActive={props.isActive('Child1')}&#xD;&#xA;        onClick={props.activate('Child1')}&#xD;&#xA;      >&#xD;&#xA;        Child1&#xD;&#xA;      </Child>&#xD;&#xA;    );&#xD;&#xA;    const Child2 = props => (&#xD;&#xA;      <Child&#xD;&#xA;        isActive={props.isActive('Child2')}&#xD;&#xA;        onClick={props.activate('Child2')}&#xD;&#xA;      >&#xD;&#xA;        Child2&#xD;&#xA;      </Child>&#xD;&#xA;    );&#xD;&#xA;    class Root extends React.Component {&#xD;&#xA;      state = { active: null };&#xD;&#xA;      activate = (active) => {&#xD;&#xA;        if (!this.isActive(active)) {&#xD;&#xA;          this.setState({ active });&#xD;&#xA;        }&#xD;&#xA;      };&#xD;&#xA;      isActive = active => this.state.active === active;&#xD;&#xA;      renderChild = (ChildComponent, i) => (&#xD;&#xA;        <ChildComponent&#xD;&#xA;          activate={this.activate}&#xD;&#xA;          isActive={this.isActive}&#xD;&#xA;          key={i}&#xD;&#xA;        />&#xD;&#xA;      );&#xD;&#xA;      render() {&#xD;&#xA;        const children = [Child1, Child2];&#xD;&#xA;        return <div>{children.map(this.renderChild)}</div>;&#xD;&#xA;      }&#xD;&#xA;    }