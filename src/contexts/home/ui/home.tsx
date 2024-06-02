import {
  View,
  FlatList,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GlobalStyles} from '@utils/globalStyles';
import {epicLoadMetaData} from '../useCases/epic';
import {useSelector} from 'react-redux';
import {metaDataSelector} from '../useCases/selectors';
import {Card} from './components/card';
import {ROUTES} from '@routeNavigation/routes';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@routeNavigation/navigationParams';
import {COLORS} from '@utils/colors';
import {getDeviceDimensions} from '@utils/deviceInfo';
import {IMAGES} from '@assets/images';
import {searchMovie} from '@helpers/search';
import {Movie} from '@model/movie';

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

  const [movieList, setMovieList] = useState<Movie[] | undefined>(data);
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    const _data = searchMovie(search, data!!);
    setMovieList(_data);
  };

  const handleNavigation = (id: string) => {
    props.navigation.navigate(ROUTES.DETAILS_SCREEN, {id});
  };

  return (
    <View style={[GlobalStyles.container, styles.customContainer]}>
      <View style={styles.searchContainer}>
        <TextInput
          value={search}
          onChangeText={text => setSearch(text)}
          style={styles.searchInput}
          keyboardType="default"
        />
        <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
          <Image style={styles.searchIcon} source={IMAGES.SEARCH_ICONS} />
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.list}
        numColumns={2}
        data={movieList}
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
  searchInput: {
    backgroundColor: COLORS.primary,
    width: getDeviceDimensions().width - 150,
    borderRadius: 25,
    margin: 25,
    borderColor: COLORS.secondary,
    borderWidth: 1,
    color: COLORS.secondary,
    paddingStart: 15,
    tintColor: COLORS.secondary,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  searchBtn: {
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    marginEnd: 24,
  },
});
