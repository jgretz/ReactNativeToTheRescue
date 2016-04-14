// imports
import React, { PropTypes } from 'react-native';
import { SelfBindingComponent } from '../../support';
import ReactNativeDrawer from 'react-native-drawer';
import DrawerMenu from './drawer_menu';
import { Color } from '../../styles';

const styles = {
  drawer: {
    backgroundColor: Color.WHITE,
  },
};

export default class extends SelfBindingComponent {
  static propTypes = {
    onItemSelected: PropTypes.func.isRequired,
    menuOptions: PropTypes.array,
  };

  // Actions

  onItemSelected(item) {
    this.close();
    this.props.onItemSelected(item);
  }

  open() {
    this.refs.Drawer.open();
  }

  close() {
    this.refs.Drawer.close();
  }

  setDrawerIsOpen(isOpen) {
    return () => {
      this.refs.Drawer.isOpen = isOpen;
    };
  }

  toggle() {
    if (this.refs.Drawer.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  // Render

  renderDrawerMenu() {
    return (
      <DrawerMenu
        menuOptions={this.props.menuOptions}
        onItemSelected={this.onItemSelected}
      />
    );
  }

  render() {
    return (
      <ReactNativeDrawer
        ref="Drawer"
        type="displace"
        content={this.renderDrawerMenu()}
        openDrawerOffset={100}
        tapToClose
        acceptPan={false}
        side="right"
        styles={styles.drawer}
        onOpen={this.setDrawerIsOpen(true)}
        onClose={this.setDrawerIsOpen(false)}
        tweenHandler={ReactNativeDrawer.tweenPresets.parallax}
      >
        {this.props.children}
      </ReactNativeDrawer>
    );
  }
}
