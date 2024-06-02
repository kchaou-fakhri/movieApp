import {View, Image, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {OMDService} from '@service/omdService';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '@routeNavigation/navigationParams';
import {ROUTES} from '@routeNavigation/routes';
import {MovieDetails} from '@model/movieDetails';
import {GlobalStyles} from '@utils/globalStyles';
import {getDeviceDimensions} from '@utils/deviceInfo';
import {COLORS} from '@utils/colors';
import {MetaDataMovie} from './components/metaDataMovie';

export const Details: React.FC = () => {
  // Destructuring navigation route parameters
  const {id} =
    useRoute<RouteProp<RootStackParamList, ROUTES.DETAILS_SCREEN>>().params;

  const [data, setData] = useState<MovieDetails>();

  useEffect(() => {
    console.log(id);
    OMDService.getMovieByID(id).then(data => {
      setData(data);
    });
  }, []);
  return (
    <View style={GlobalStyles.container}>
      {data ? (
        <>
          <Image source={{uri: data?.Poster}} style={styles.image} />
          <View style={styles.infoContainer}>
            <MetaDataMovie
              title={data.Title}
              rate={data.Ratings[0].Value}
              runTime={data.Runtime}
              released={data.Released}
              type={data.Genre}
              description={data.Plot}
            />
          </View>
        </>
      ) : (
        <ActivityIndicator size="large" color={COLORS.secondary} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: getDeviceDimensions().width,
    height: getDeviceDimensions().height / 1.5,
    resizeMode: 'cover',
  },
  infoContainer: {
    flex: 1,
    marginTop: 25,
    marginStart: 15,
  },
  title: {
    color: COLORS.text.onPrimarySurface,
    fontWeight: 'bold',
  },
});
