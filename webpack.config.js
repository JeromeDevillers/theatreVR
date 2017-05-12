module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.json$/, loader: 'json-loader' }
        ]
    },
    node: {
        console: false,
        fs: "empty"
    }
};