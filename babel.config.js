module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-worklets/plugin", // should appear ONCE, and must be last if reanimated plugin is also present
    ],
  };
};
