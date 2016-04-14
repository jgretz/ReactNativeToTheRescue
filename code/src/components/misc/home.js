// imports
import React, { View, ListView, Text } from 'react-native';
import { connect } from 'react-redux';

import { createStyle } from '../../styles';
import { SelfBindingComponent } from '../../support';

// class
class Home extends SelfBindingComponent {
  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.sessions)
    };
  }

  render() {
    return (
      <ListView
        style={[styles.container, styles.screen, styles.listView]}
        dataSource={this.state.dataSource}
        renderRow={this.renderSession}
        renderSeparator={this.renderSeparator} />
    );
  }

  renderSession(session) {
    return (
      <View key={session.index}>
        <Text>{session.session}</Text>
        <Text>{session.speaker}</Text>
      </View>
    );
  }

  renderSeparator(sectionID, rowID) {
    return <View key={`${sectionID}-${rowID}`} style={styles.separator} />;
  }
}

// styles
const styles = createStyle({
  listView: {
    marginLeft: 10,
    marginRight: 10
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  }
});

// mapStateToProps
const mapStateToProps = (state) => {
  return {
    sessions: state.sessions
  };
};

// export
export default connect(mapStateToProps)(Home);
