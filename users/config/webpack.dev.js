const commonConfig = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { merge } = require("webpack-merge");
const packageJson = require("../package.json");

const devConfig = {
    mode: "development",
    output: {
        publicPath: "http://localhost:8081/"
    },
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: "/index.html"
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            favicon: "./public/logo192.png"
        }),
        new ModuleFederationPlugin({
            name: "users",
            filename: "remoteEntry.js",
            exposes: {
                "./usersApp": "./src/bootstrap",
                "./button": "./src/components/Button",
                "./dialog": "./src/components/Dialog",
                "./list": "./src/components/List"
            },
            // exposes: {
            //     "./authApp":"./src/bootstrap"
            // },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, devConfig)