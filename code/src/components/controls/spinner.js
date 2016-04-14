import React, { View, Text } from 'react-native';
import RNSpinner from 'react-native-spinkit';

import { createStyle } from '../../styles';
import { SelfBindingComponent } from '../../support';

// styles
const styles = createStyle();

// export
export class Spinner extends SelfBindingComponent {
  constructor(props) {
    super(props);

    this.state = {
      spinnerIsVisible: false
    };
  }

  show() {
    this.setState({spinnerIsVisible:true});
  }

  hide() {
    this.setState({spinnerIsVisible:false});
  }

  renderSpinner() {
    return <RNSpinner isVisible={this.state.spinnerIsVisible} type="ThreeBounce" color="#000" />;
  }

  renderChildren() {
    return this.props.children;
  }

  render() {
    return (
      <View style={styles.contentContainer}>
        { this.state.spinnerIsVisible ? this.renderSpinner() : this.renderChildren() }
      </View>
    );
  }
};
