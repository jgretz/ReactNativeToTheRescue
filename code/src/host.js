// imports
import React, { Component } from 'react-native';
import { Provider } from 'react-redux';

import App from './components/app';
import configureStore from './configureStore';

export default class Host extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <App />
      </Provider>
    );
  }
};
