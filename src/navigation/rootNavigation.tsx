import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './navigationParams';

import {ROUTES} from './routes';
import {Splash} from '@contexts/splash/ui/splash';
import {Home} from '@contexts/home/ui/home';
import {Details} from '@contexts/details/ui/details';

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * RootNavigation is the main navigation component that defines the navigation stack.
 * It includes screens for the SplashScreen and Home.
 *
 * @returns {JSX.Element} The RootNavigation component.
 */
const RootNavigation = (): JSX.Element => {
  return (
    // Stack.Navigator contains the stack of screens in the application

    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.SPLASH_SCREEN}
        component={Splash}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={ROUTES.HOME_SCREEN}
        component={Home}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={ROUTES.DETAILS_SCREEN}
        component={Details}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export {RootNavigation};
