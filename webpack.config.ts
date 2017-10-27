import * as webpack from 'webpack';
import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
    entry: './src/app.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            { test: /\.ts?$/, use: 'ts-loader' },
            { test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader"  },
                    { loader: "sass-loader" }
                ]}
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({ join: 'lodash/join' }),
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new webpack.optimize.CommonsChunkPlugin({ name: 'common' })
    ]
};

export default config;