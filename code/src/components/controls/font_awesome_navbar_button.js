import React, {
  StyleSheet,
  Component,
  View,
  TouchableOpacity,
  PropTypes,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Color } from '../../styles';

const styles = StyleSheet.create({
  icon: {
    marginLeft: 6,
    paddingTop: 8,
    color: Color.WHITE,
  },
});

export class FontAwesomeNavbarButton extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    iconName: PropTypes.string,
    color: React.PropTypes.string,
    style: React.PropTypes.object,
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Icon
            name={this.props.iconName}
            size={22}
            color={this.props.color}
            style={[styles.icon, this.props.style]}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
