import React, {
  PropTypes,
  StyleSheet,
  View,
  TouchableOpacity,
  ListView,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Color, Font } from '../../styles';
import { SelfBindingComponent } from '../../support';

import { Home
} from '../../routing';


const defaultMenuOptions = [
  { name: 'Home', icon: 'home', route: Home }
];

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.WHITE,
    height: 100,
    paddingTop: 22,
    paddingBottom: 8,
  },
  headerImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    borderLeftWidth: 2,
    borderLeftColor: Color.ALUMINUM,
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 16,
  },
  rowIcon: {
    color: Color.BLACK,
    marginRight: 16,
  },
  rowTitle: {
    fontSize: 17,
    color: Color.BLACK,
  },
  rowSeperator: {
    height: 1,
    backgroundColor: Color.WHITE_LILAC,
  },
});

export default class extends SelfBindingComponent {
  static propTypes = {
    onItemSelected: PropTypes.func.isRequired,
    menuOptions: PropTypes.array,
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.menuOptions || defaultMenuOptions),
    };
  }

  // Actions

  itemSelected(route) {
    return () => this.props.onItemSelected(route);
  }

  // Render

  renderRow(data) {
    return (
      <View>
        <TouchableOpacity onPress={this.itemSelected(data.route, this)}>
          <View style={styles.rowContainer}>
            <Icon
              style={styles.rowIcon}
              size={22}
              name={data.icon || 'chevron-right'}
            />
            <Text style={styles.rowTitle}>{data.name}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.rowSeperator} />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer} />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          bounces={false}
        />
      </View>
    );
  }
}
