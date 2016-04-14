import React, { Navigator } from 'react-native';
import { connect } from 'react-redux';
import Router from '../routing/router';
import { Loading } from '../routing';
import { SelfBindingComponent } from '../support';

class App extends SelfBindingComponent {
  constructor(props) {
    super(props);
    this.router = new Router();
  }

  configureScene() {
    return Navigator.SceneConfigs.FadeAndroid;
  }

  renderScene(route, navigator) {
    return this.router.renderRoute(route, navigator);
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: Loading }}
        renderScene={this.renderScene}
        configureScene={this.configureScene}
      />
    );
  }
}

export default connect()(App);
