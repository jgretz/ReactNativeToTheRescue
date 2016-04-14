import React, {
  ScrollView,
  DeviceEventEmitter,
} from 'react-native';
import { SelfBindingComponent } from '../../support';

export class KeyboardScrollView extends SelfBindingComponent {
  constructor(props) {
    super(props);
    this.state = { keyboardOffset: 0 };
  }

  componentWillMount() {
    DeviceEventEmitter.addListener('keyboardWillShow', this.keyboardWillShow);
    DeviceEventEmitter.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  // Actions

  keyboardWillShow(e) {
    this.setState({ keyboardOffset: e.endCoordinates.height });
  }

  keyboardWillHide() {
    this.setState({ keyboardOffset: 0 });
    this.refs.ScrollView.scrollTo(0, 0, true);
  }

  // Render

  render() {
    return (
      <ScrollView
        { ...this.props }
        ref="ScrollView"
        contentInset={{ bottom: this.state.keyboardOffset }}
        alwaysBounceVertical={false}
      >
        {this.props.children}
      </ScrollView>
    );
  }
}
