// REQUIRE
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');

// PRE-CONFIG
var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {

    entry: [
        APP_DIR + '/app/app.tsx'
    ],
    output: {
        path: BUILD_DIR + '',
        filename: 'app.js'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".jsx", ".js", ".html"]
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel'
            },
            {
                test: /\.tsx?$/,
                loader: "babel-loader!ts-loader"
            },
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel'
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            // {
            //     test: /\.scss/,
            //     loader: "style!sass!css"
            // },
            // {
            //     test: /\.less$/,
            //     loader: "style!css!less"
            // },
            {
                test: /\.scss$/,
                loader: "style!css!sass?includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib")
            },
            {
                test: /\.rt$/,
                loader: "babel-loader!react-templates-loader?modules=es6"
            }
        ],
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {test: /\.jsx$/, loader: "source-map-loader"}
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(['dev'], {
        //     root: process.cwd(),
        //     verbose: true
        //     // dry: false,
        //     //exclude: ['shared.js']
        // }),
        new HtmlWebpackPlugin({
            title: 'Phoenix',
            filename: 'index.html',
            template: APP_DIR + '/index.html'
        }),
        new WebpackNotifierPlugin({title: 'Webpack'})
    ]
};

module.exports = config;
