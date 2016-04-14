// import
import React, {Component, View} from 'react-native';
import {connect} from 'react-redux';
import _ from 'underscore';

import {createStyle} from '../../styles';
import {Main} from '../../routing';
import {getSessionInfo} from '../../actions';
import {SelfBindingComponent} from '../../support';

// class
class Loading extends SelfBindingComponent {
  load() {
    return Promise.all([
      this.props.getSessionInfo()
    ]);
  }

  componentWillMount() {
    this.load().then(() => {
      this.props.router.route(Main);
    });
  }

  render() {
    return (
      <View style={[styles.container, styles.loading]}>
      </View>
    );
  }
}

// style
const styles = createStyle({
  loading: {
    backgroundColor: '#fff'
  }
});

// export
export default connect(null, { getSessionInfo })(Loading);
