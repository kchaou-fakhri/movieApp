module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', 'js', 'jsx', '.json'],
        alias: {
          '@utils': './src/utils/',
          '@reduxConfig': './src/reduxConfiguration/',
          '@routeNavigation': './src/navigation/',
          '@contexts': './src/contexts/',
          '@components': './src/components/',
          '@assets': './src/assets/',
          '@constants': './src/constants/',
          '@model': './src/model/',
          '@service': './src/service/',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
