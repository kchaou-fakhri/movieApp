import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {COLORS} from '@utils/colors';
import {IMAGES} from '@assets/images';
import {STORY_LINE} from '@constants/constants';

interface Props {
  title: string;
  rate: number;
  runTime: string;
  type: string;
  released: string;
  description: string;
}

/**
 * Component to display metadata about a movie.
 *
 * @param {Props} props - The properties passed to the component.
 * @param {string} props.title - The title of the movie.
 * @param {number} props.rate - The rating of the movie.
 * @param {string} props.runTime - The runtime of the movie.
 * @param {string} props.type - The type/genre of the movie.
 * @param {string} props.released - The release date of the movie.
 * @param {string} props.description - A brief description of the movie.
 * @returns {JSX.Element} The MetaDataMovie component.
 */

export const MetaDataMovie: React.FC<Props> = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.rateContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Image source={IMAGES.STAR} style={styles.star} />
        <Text style={styles.rateValue}>{props.rate}</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>
          {`${props.runTime} • ${props.type} • ${props.released}`}{' '}
        </Text>
      </View>

      <Text style={styles.storyLine}>{STORY_LINE}</Text>
      <Text style={styles.description}>{props.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    flex: 3,
  },
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  star: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  rateValue: {
    color: COLORS.text.onPrimarySurface,
    marginRight: 15,
    fontSize: 13,
    fontWeight: 'bold',
  },

  dateContainer: {
    marginTop: 15,
    marginBottom: 25,
    flexDirection: 'row',
  },

  date: {
    color: COLORS.text.hint,
    fontSize: 13,
  },
  storyLine: {
    color: 'white',
    fontWeight: 'bold',
  },
  description: {
    color: COLORS.text.hint,
    fontSize: 13,
    paddingEnd: 10,
  },
});
