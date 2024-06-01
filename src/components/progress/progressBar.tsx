import {COLORS} from '@utils/colors';
import {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';

interface Props {
  width: number;
  height: number;
}

/**
 * ProgressBar is a component representing an animated progress bar.
 * It uses react-native-reanimated for animation and retrieves progress value.
 *
 * @returns {JSX.Element} The ProgressBar component.
 */
export const ProgressBar: React.FC<Props> = (props: Props) => {
  // Create a shared value to animate the progress bar
  const progress = useSharedValue(0);

  // useEffect hook to update the progress animation when the component mounts
  useEffect(() => {
    // Set the progress value with animation using react-native-reanimated
    progress.value = withTiming(200, {duration: 2000});
  }, []);

  return (
    <View
      style={[
        {
          height: props.height,
          backgroundColor: COLORS.secondary,
          width: props.width,
        },
        styles.container,
      ]}>
      {/* Animated View representing the progress */}
      <Animated.View
        style={{
          marginLeft: progress,
          height: props.height,
          backgroundColor: COLORS.primary,
        }}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
  },
});
