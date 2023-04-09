module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          '@app': './src/',
          '@ui': './src/ui/',
          '@features': './src/features/',
          '@navigation': './src/navigation/',
          '@api': './src/api/',
          '@assets': './src/assets/',
          '@constants': './src/constants/',
          '@auth': './src/features/auth/',
        },
      },
    ],
  ],
};
