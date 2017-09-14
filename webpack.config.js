const nodeExternals = require('webpack-node-externals');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    target: 'node', // in order to ignore built-in modules like path, fs, etc. 
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder 
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader",
                options: {
                    includePaths: ["src/sass/admin.scss", "dist/style.css"]
                }
            }]
        }],
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.json$/, loader: 'json-loader' },
            { test:   /\.(scss|sass|css)$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) },
            { test: /\.scss$/, loader: 'style!css!sass!sass-resources'}
        ]
    },
    plugins: [
      new ExtractTextPlugin("[name].css")
    ],
    node: {
        console: true,
        fs: "empty"
    }
};