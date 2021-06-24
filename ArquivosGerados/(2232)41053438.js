    import React, {Component} from 'react';&#xD;&#xA;    import {&#xD;&#xA;      AppRegistry,&#xD;&#xA;      StyleSheet,&#xD;&#xA;      Text,&#xD;&#xA;      View,&#xD;&#xA;      Navigator,&#xD;&#xA;      Alert,&#xD;&#xA;      Button&#xD;&#xA;    } from 'react-native';&#xD;&#xA;    import Main from './Screen/Main.js';&#xD;&#xA;    import Login from './Screen/Login.js';&#xD;&#xA;    class RouteTest extends Component {&#xD;&#xA;      renderScene(route, navigator) {&#xD;&#xA;        switch (route.name) {&#xD;&#xA;          case 'main':&#xD;&#xA;            return (<Main />);&#xD;&#xA;          case 'login':&#xD;&#xA;            return (<Login&#xD;&#xA;              click={()=>{ &#xD;&#xA;                if(this.state.user_name == 'abc' && this.state.password == '123') { &#xD;&#xA;                  navigator.push({name: 'main'}) &#xD;&#xA;                } else {&#xD;&#xA;                  Alert.alert("Login failed");&#xD;&#xA;                }&#xD;&#xA;              }}/>);&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      render() {&#xD;&#xA;        return (<Navigator&#xD;&#xA;          initialRoute={{&#xD;&#xA;          name: 'login'&#xD;&#xA;        }}&#xD;&#xA;          renderScene={this.renderScene}/>);&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    AppRegistry.registerComponent('RouteTest', () => RouteTest);