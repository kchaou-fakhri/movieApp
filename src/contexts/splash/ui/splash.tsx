import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import {GlobalStyles} from '@utils/globalStyles';
import {ProgressBar} from '@components/progress/progressBar';
import {IMAGES} from '@assets/images';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '@routeNavigation/routes';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@routeNavigation/navigationParams';

interface Props {
  navigation: StackNavigationProp<RootStackParamList>;
}
/**
 * Splash component
 *
 * @returns {JSX.Element} The Splash screen component that displays a logo and a progress bar, and navigates to the home screen after a delay.
 */
export const Splash: React.FC<Props> = (props: Props): JSX.Element => {
  const navigation = useNavigation();

  // Navigate to the home screen after a delay of 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      props.navigation.navigate(ROUTES.HOME_SCREEN);
    }, 2500);

    // Clear the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={[GlobalStyles.container, styles.customContainer]}>
      <Image source={IMAGES.LOGO} style={styles.image} />
      <ProgressBar width={200} height={5} />
    </View>
  );
};

const styles = StyleSheet.create({
  customContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: 100,
    marginBottom: 35,
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});
