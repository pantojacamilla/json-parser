    import { createAppContainer, createDrawerNavigator } from "react-navigation";&#xD;&#xA;    import { SideMenuScreen } from "./screens/Sidemenu";&#xD;&#xA;    import { HomeScreen } from "./screens/Home";&#xD;&#xA;   &#xD;&#xA;    export default class App extends Component {&#xD;&#xA;      render() {&#xD;&#xA;        return(&#xD;&#xA;          <AppContainer></AppContainer>&#xD;&#xA;        );&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    const AppNavigator = createDrawerNavigator(&#xD;&#xA;      {Home: HomeScreen, &#xD;&#xA;        other: otherpage},&#xD;&#xA;      {&#xD;&#xA;        contentComponent: SideMenuScreen&#xD;&#xA;      }&#xD;&#xA;    );&#xD;&#xA;    &#xD;&#xA;    const AppContainer = createAppContainer(AppNavigator);