// imports
import React, { AppRegistry, Navigator, Component } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './reducers/index';
import App from './components/app';

// create the store
const store = applyMiddleware(thunk)(createStore)(reducers);

// function so we can pass in parameters if needed
export default (params) => {
  // class
  class Host extends Component {
    render() {
      return (
        <Provider store={store}>
          <App params={params} />
        </Provider>
      );
    }
  }

  // register component
  AppRegistry.registerComponent('conf', () => Host);
}
