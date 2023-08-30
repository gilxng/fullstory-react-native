module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@fullstory/react-native',
    ['@fullstory/babel-plugin-annotate-react', {'annotate-fragments': true}],
  ],
};
