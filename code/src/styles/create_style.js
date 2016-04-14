import { StyleSheet } from 'react-native';

import defaultStyles from './default_style';

export function createStyle(viewStyle) {
  const combined = Object.assign(defaultStyles, viewStyle);

  return StyleSheet.create(combined);
}
