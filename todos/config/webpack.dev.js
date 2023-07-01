const commonConfig = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { merge } = require("webpack-merge");

const devConfig = {
    mode: "development",
    devServer: {
        port: 8086,
        historyApiFallback: true
    },
    output: {
        publicPath: "http://localhost:8086/"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new ModuleFederationPlugin({
            name: "todos",
            filename: "remoteEntry.js",
            exposes: {
                "./todosApp": "./src/bootstrap"
            }
        })
    ]
}

module.exports = merge(commonConfig, devConfig);