import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {GlobalStyles} from '@utils/globalStyles';
import {getDeviceDimensions} from '@utils/deviceInfo';
import {Movie} from '@model/movie';
import {COLORS} from '@utils/colors';

// Define the props for the Card component
interface Props {
  movie: Movie; // The movie object containing details like Poster, Type, and Title
  onPressMovie: () => void; // Function to call when the card is pressed
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
    width: getDeviceDimensions().width / 2 - 20,
    height: 250,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    borderColor: COLORS.secondary,
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  infoContainer: {
    width: '100%',
    marginTop: 20,
  },
  title: {
    color: COLORS.text.hint,
    textAlign: 'left',
    fontSize: 13,
    padding: 2,
    paddingLeft: 10,
  },
  type: {
    color: COLORS.secondary,
    fontSize: 13,
    fontWeight: '500',
    paddingLeft: 10,
  },
});
