import React, {
  Component,
  PropTypes,
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native';
import { Color, Font, Shade } from '../../styles';

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.ALUMINUM,
    borderRadius: 22.5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 220,
    height: 45,
    marginTop: 12,
  },
  buttonText: {
    fontSize: 17,
    color: Color.WHITE,
  },
  primary: {
    backgroundColor: Color.ELECTRIC_BLUE,
  },
  secondary: {
    backgroundColor: Color.RED_BERRY,
  },
});

export class Button extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    children: PropTypes.string,
    modifier: React.PropTypes.oneOf([
      'default',
      'primary',
      'secondary',
    ]),
  };

  underlayColor() {
    return {
      default: Color.ABBEY,
      primary: Shade.ELECTRIC_BLUE,
      secondary: Shade.RED_BERRY,
    }[this.props.modifier || 'default'];
  }

  showUnderlay() {
    return;
  }

  render() {
    return (
      <TouchableHighlight
        style={[styles.button, styles[this.props.modifier]]}
        underlayColor={this.underlayColor()}
        onPress={this.props.onPress || this.showUnderlay}
      >
        <Text style={styles.buttonText}>{this.props.children}</Text>
      </TouchableHighlight>
    );
  }
}
