import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {OMDService} from '@service/omdService';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '@routeNavigation/navigationParams';
import {ROUTES} from '@routeNavigation/routes';

export const Details: React.FC = () => {
  // Destructuring navigation route parameters
  const {id} =
    useRoute<RouteProp<RootStackParamList, ROUTES.DETAILS_SCREEN>>().params;

  useEffect(() => {
    console.log(id);
    OMDService.getMovieByID(id).then(data => {
      console.log(data);
    });
  }, []);
  return <View></View>;
};
