import React, { StyleSheet, TextInput } from 'react-native';
import { SelfBindingComponent } from '../../support';
import { Color, Font } from '../../styles';

const styles = StyleSheet.create({
  input: {
    height: 44,
    padding: 8,
    backgroundColor: Color.WHITE_LILAC,
    color: Color.BLACK,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: Color.ALUMINUM,
    width: 300,
    alignSelf: 'center'
  },
});

export class Input extends SelfBindingComponent {
  render() {
    return <TextInput {...this.props} style={styles.input} />;
  }
}
