import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {GlobalStyles} from '@utils/globalStyles';
import {getDeviceDimensions} from '@utils/deviceInfo';
import {Movie} from '@model/movie';
import {COLORS} from '@utils/colors';

// Define the props for the Card component
interface Props {
  movie: Movie; // The movie object containing details like Poster, Type, and Title
  onPressMovie: (id: string) => void; // Function to call when the card is pressed
}

/**
 * Card component
 *
 * @param {Props} props - The properties for the Card component.
 * @returns {JSX.Element} The rendered Card component.
 */
export const Card: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={props.onPressMovie}>
      <Image source={{uri: props.movie.Poster}} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.type}>{props.movie.Type}</Text>
        <Text style={styles.title}>{props.movie.Title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: getDeviceDimensions().width / 2 - 50,
    height: 220,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    borderColor: COLORS.secondary,
    borderWidth: 2,
    margin: 15,
    borderRadius: 10,
  },
  image: {
    marginTop: 10,
    width: 150,
    height: 130,
    resizeMode: 'contain',
  },
  infoContainer: {
    width: '100%',
    marginTop: 10,
  },
  title: {
    color: COLORS.background.default,
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '700',
    padding: 2,
  },
  type: {
    color: COLORS.secondary,
    fontSize: 13,
    fontWeight: '700',
    paddingLeft: 25,
  },
});
