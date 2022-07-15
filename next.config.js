// @generated: @expo/next-adapter@2.1.52
// Learn more: https://docs.expo.io/guides/using-nextjs/

const { withExpo } = require('@expo/next-adapter');
const withFonts = require('next-fonts');

module.exports = withExpo(
  withFonts({
    projectRoot: __dirname
  })
);
