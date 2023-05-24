module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.ts', '.android.ts', '.ts', '.tsx', '.json'],
        alias: {
          '@app': './src/app/index.tsx',
          '@screens': './src/screens',
          '@components': './src/components',
          '@navigator': './src/navigator',
          '@constants': './src/constants',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@services': './src/services',
          '@models': './src/models'
        }
      }
    ]
  ]
}
