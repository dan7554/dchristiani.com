module.exports = options => {
    return {

        devServer: {
            disableHostCheck: true,
            host: '0.0.0.0',
            port: 8090
        },
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    test: /.js$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                cacheDirectory: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.css$/,
                    loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
                },
                {
                    test: /\.png$/,
                    use: [{ loader: "url-loader?limit=100000" }]
                },
                {
                    test: /\.jpg$/,
                    use: [{ loader: "file-loader" }]
                },
                {
                    test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [{ loader: 'url-loader?limit=10000&mimetype=application/font-woff' }]
                },
                {
                    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                    use: [{ loader: 'url-loader?limit=10000&mimetype=application/octet-stream' }]
                },
                {
                    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                    use: [{ loader: 'file-loader' }]
                },
                {
                    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                    use: [{ loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }]
                }
            ]
        },
    }
}