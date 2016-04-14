// imports
import React, { Navigator, PropTypes } from 'react-native';
import { SelfBindingComponent } from '../../support';
import Drawer from './drawer';
import { Home } from '../../routing';
import Router from '../../routing/router';
import NavigationBar from '../controls/navigation_bar';

export default class extends SelfBindingComponent {
  static propTypes = {
    initialRoute: PropTypes.string,
    menuOptions: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.router = new Router();
  }

  renderScene(route, navigator) {
    return this.router.renderRoute(route, navigator);
  }

  toggleDrawer() {
    this.refs.Drawer.toggle();
  }

  drawerItemSelected(route) {
    this.router.resetTo(route);
  }

  configureScene(route, routeStack) {
    if (routeStack.length > 1) {
      return Navigator.SceneConfigs.HorizontalSwipeJump;
    }

    return Navigator.SceneConfigs.FadeAndroid;
  }

  render() {
    return (
      <Drawer
        ref="Drawer"
        onItemSelected={this.drawerItemSelected}
        menuOptions={this.props.menuOptions}
      >
        <Navigator
          ref="Navigator"
          initialRoute={{ name: this.props.initialRoute || Home }}
          renderScene={this.renderScene}
          navigationBar={new NavigationBar(this.toggleDrawer)}
          configureScene={this.configureScene}
        />
      </Drawer>
    );
  }
}
