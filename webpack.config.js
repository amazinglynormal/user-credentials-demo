const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
    mode: isDevelopment ? "development" : "production",
    entry: path.resolve(__dirname, "frontend/src/index.js"),
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: "asset/inline",
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "src/main/resources"),
        filename: "static/built/bundle.js",
        clean: true,
    },
    plugins: [
        !isDevelopment && new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "frontend/src/index.html"),
            filename: "templates/index.html"
        }),
        isDevelopment && new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "frontend/src/index.html"),
        }),
        isDevelopment && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    devtool: isDevelopment ? "cheap-module-source-map" : "source-map",
    devServer: {
        stats: "normal",
        clientLogLevel: "warn",
        open: true,
        hot: true,
    },
};