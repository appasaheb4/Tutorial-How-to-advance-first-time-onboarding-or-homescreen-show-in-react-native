/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, { Component } from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { createAppContainer } from "react-navigation";
import { createRootNavigator } from "./src/app/router/router";
import BackUpScreen from "./src/screen/BackUpScreen/BackUpScreen";

class Tutorial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      isStartPage: "OnBoardingNavigator"
    };
  }

  onComplited(status, pageName) {
    this.setState({
      status: status,
      isStartPage: pageName
    });
  }

  render() {
    const Layout = createRootNavigator(
      this.state.status,
      this.state.isStartPage
    );

    const AppContainer = createAppContainer(Layout);
    return this.state.status ? (
      <BackUpScreen
        onComplited={(status: boolean, pageName: string) =>
          this.onComplited(status, pageName)
        }
      />
    ) : (
      <AppContainer />
    );
  }
}
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => Tutorial);
