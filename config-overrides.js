const { override, addDecoratorsLegacy } = require('customize-cra');
const supportMjs = () => (webpackConfig) => {
    webpackConfig.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
    });
    return webpackConfig;
};

module.exports = override(
    addDecoratorsLegacy(),
    supportMjs()
);