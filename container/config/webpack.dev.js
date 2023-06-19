const commonConfig = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const PackageJson = require("../package.json");
const { merge } = require("webpack-merge");

const devConfig = {
    mode: "development",
    devServer: {
        port: 8080,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: "./public/favicon.ico",
            template: "./public/index.html"
        }),
        new ModuleFederationPlugin({
            name: "container",
            filename: "remoteEntry.js",
            remotes: {
                "todos": "todos@http://localhost:8082/remoteEntry.js",
                "users": "users@http://localhost:8081/remoteEntry.js"
            },
            // remotes: {
            //     "marketing": "marketing@http://localhost:8082/remoteEntry.js",
            //     "auth": "auth@http://localhost:8081/remoteEntry.js"
            // },
            shared: PackageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, devConfig);