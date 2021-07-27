const path = require("path");
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
        path: path.resolve(__dirname, "src/main/resources/static/built"),
        filename: "bundle.js",
    },
    devtool: isDevelopment ? "cheap-module-source-map" : "source-map",
    devServer: {
        stats: "normal",
        clientLogLevel: "warn",
        open: true,
        hot: true,
    },
};