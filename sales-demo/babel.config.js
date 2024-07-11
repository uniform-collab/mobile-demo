module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@uniformdev/context/api': '@uniformdev/context/dist/api/api.js',
          '@/icons': './src/icons',
          '@/canvas': './src/canvas',
          '@/context': './src/context',
          '@/components': './src/components',
          '@/navigation': './src/navigation',
          '@/screens': './src/screens',
          '@/theme': './src/theme',
          '@/utilities': './src/utilities',
        },
      },
    ],
  ],
};
