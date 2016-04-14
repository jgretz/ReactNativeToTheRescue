// imports
import React, { Component, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { createStyle } from '../../styles';
import { SelfBindingComponent } from '../../support';

// class
class Home extends SelfBindingComponent {
  render() {
    return (
      <View style={[styles.container, styles.screen]}>
        <View style={[styles.container, styles.contentContainer, styles.bestAction, styles.contentHold]}>
          <Text>Next Best Action</Text>
        </View>
        <View style={[styles.container, styles.contentContainer, styles.contentHold]}>
          <Text>Consistent Calls to Actions</Text>
        </View>
        <View style={[styles.container, styles.contentContainer, styles.contentHold]}>
          <Text>Urgent Alerts and Updates</Text>
        </View>
      </View>
    )
  }
}

// styles
const styles = createStyle({
  bestAction: {
    flex: 2
  },
  contentHold: {
    alignSelf: 'stretch',

    borderWidth: 1,
    borderColor: '#000'
  }
});

// export
export default connect()(Home);
