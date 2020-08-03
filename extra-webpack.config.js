const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const webpackMerge = require('webpack-merge');
const { name } = require('./package');

module.exports = (angularWebpackConfig, options) => {
    const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options);

    const singleSpaConfig = {
        output: {
            // Keep the same with the registration in main app
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`,
            publicPath = 'http://localhost:7102/'

        },
        externals: {
            'zone.js': 'Zone',
        },
    };
    const mergedConfig = webpackMerge.smart(singleSpaWebpackConfig, singleSpaConfig);
    return mergedConfig;
};