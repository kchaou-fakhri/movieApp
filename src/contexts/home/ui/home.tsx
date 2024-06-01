import {View, FlatList, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {GlobalStyles} from '@utils/globalStyles';
import {epicLoadMetaData} from '../useCases/epic';
import {useSelector} from 'react-redux';
import {metaDataSelector} from '../useCases/selectors';
import {Card} from './components/card';
import {ROUTES} from '@routeNavigation/routes';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@routeNavigation/navigationParams';

interface Props {
  navigation: StackNavigationProp<RootStackParamList>;
}
/**
 * Home component
 *
 * @returns {JSX.Element} The Home screen component displaying a list of movies.
 */
export const Home: React.FC<Props> = (props: Props): JSX.Element => {
  // Select the metadata from the Redux store
  const data = useSelector(metaDataSelector);

  // Load metadata on component mount
  useEffect(() => {
    epicLoadMetaData();
  }, []);

  const handleNavigation = (id: string) => {
    props.navigation.navigate(ROUTES.DETAILS_SCREEN, {id});
  };

  return (
    <View style={[GlobalStyles.container, styles.customContainer]}>
      <FlatList
        style={styles.list}
        numColumns={2}
        data={data}
        renderItem={({item}) => (
          <Card
            onPressMovie={() => handleNavigation(item.imdbID)}
            movie={item}
          />
        )}
        keyExtractor={item => item.imdbID}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  customContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex: 1,
  },
});
