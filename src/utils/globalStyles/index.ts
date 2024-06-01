
import { StyleSheet } from 'react-native';
import { COLORS } from '..';

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },

  icons: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 20,
  },


});
