    const { extendObservable } = mobx;&#xD;&#xA;    const { Observer } = mobxReact;&#xD;&#xA;    class Store {&#xD;&#xA;      constructor() {&#xD;&#xA;        console.log("Created a store");&#xD;&#xA;        extendObservable(this, {&#xD;&#xA;          count: 0&#xD;&#xA;        });&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    class App extends React.Component {&#xD;&#xA;      store = new Store();&#xD;&#xA;      render() {&#xD;&#xA;        const { store } = this;&#xD;&#xA;        return (&#xD;&#xA;          <Observer>&#xD;&#xA;            {() => <button onClick={() => ++store.count}>{store.count}</button>}&#xD;&#xA;          </Observer>&#xD;&#xA;        );&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    ReactDOM.render(<App />, document.getElementById("root"));