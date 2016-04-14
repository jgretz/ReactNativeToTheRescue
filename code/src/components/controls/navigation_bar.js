import React, {
  TouchableOpacity,
  Text,
  Navigator,
  Platform,
} from 'react-native';
import { FontAwesomeNavbarButton } from './font_awesome_navbar_button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { humanize, titleize } from 'underscore.string';
import { Color } from '../../styles';
import _ from 'lodash';

const globalStyles = {
  navBar: {
    backgroundColor: Color.ELECTRIC_BLUE,
  },
  navBarTitle: {
    color: Color.WHITE,
    fontSize: 17,
  },
  backButton: {
    color: Color.WHITE,
    fontSize: 17,
  },
};

const androidStyles = {
  navBarTitle: {
    top: 16,
  },
  backButton: {
    marginLeft: 16,
  },
  leftButton: {
    marginTop: 16,
  },
  rightButton: {
    marginTop: 16,
    marginRight: 10
  }
};

const iosStyles = {
  navBarTitle: {
    top: 8,
  },
  leftButton: {
    paddingLeft: 10,
  },
  rightButton: {
    paddingRight: 10,
  },
  backButton: {
    top: 8,
  }
};

const styles = _.merge(globalStyles,
  Platform.OS === 'ios' ? iosStyles : androidStyles);

function navigationBarRouteMapper(menuOnPress) {
  return {
    LeftButton(route, navigator, index) {
      if (index > 0 && !route.hidesBackButton) {
        return (
          <TouchableOpacity style={styles.leftButton} onPress={navigator.pop}>
            <Text style={styles.backButton}>
              <Icon
                size={22}
                name="angle-left"
              /> {Platform.OS === 'ios' ? 'Back' : null}
            </Text>
          </TouchableOpacity>
        );
      }

      return null;
    },

    RightButton(route) {
      if (menuOnPress && !route.hidesMenuButton) {
        return (
          <FontAwesomeNavbarButton
            style={styles.rightButton}
            iconName="bars"
            onPress={menuOnPress}
          />
        );
      }

      return null;
    },

    Title(route) {
      return (
        <Text style={styles.navBarTitle}>
          {route.title || titleize(humanize(route.name))}
        </Text>
      );
    },
  };
}

export default function (menuOnPress) {
  return (
    <Navigator.NavigationBar
      style={styles.navBar}
      routeMapper={navigationBarRouteMapper(menuOnPress)}
    />
  );
}
