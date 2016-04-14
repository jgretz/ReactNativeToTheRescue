import React, { PropTypes, StyleSheet, View, Text } from 'react-native';
import { SelfBindingComponent } from '../../support';
import { Color, Font } from '../../styles';

const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.WHITE,
    borderRadius: 4,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    padding: 16,
  },
  cardTitle: {
    fontSize: 13,
    color: Color.ALUMINUM,
    paddingBottom: 16,
  },
});

export class Card extends SelfBindingComponent {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  };

  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{this.props.title}</Text>
        <View style={styles.propTypeContainer}>
          {this.props.children}
        </View>
      </View>
    );
  }
}
