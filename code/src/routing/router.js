// imports
import React from 'react-native';
import ROUTE_MAP from './route_map';

// router class
export default class {
  renderRoute(route, navigator) {
    if (!this.navigator) {
      this.navigator = navigator;
    }

    const Component = ROUTE_MAP[route.name];
    if (!Component) {
      throw new Error(`Route '${route.name} has not been registered.'`);
    }

    return <Component route={route} router={this} />;
  }

  route(route, payload) {
    this.navigator.push({ name: route, ...payload });
  }

  resetTo(route, payload) {
    this.navigator.resetTo({ name: route, ...payload });
  }
}
