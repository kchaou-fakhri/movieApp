
import { Device } from '@model/device';
import { Dimensions } from 'react-native';

export const getDeviceDimensions = (): Device => {
  return {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  };
};
