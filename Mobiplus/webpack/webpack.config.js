'use strict';
const WebpackBar = require('webpackbar');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const helpers = require('./helpers');
const rootOutput = helpers.root('wwwroot/dist');

const config = {
    "scss": [
        {
            "path": "assets/sass/style.scss",
            "name": "style",
            "primary": true
        },

    ]
}

function recursiveIssuer(m) {
    if (m.issuer) {
        return recursiveIssuer(m.issuer);
    } else if (m.name) {
        return m.name;
    } else {
        return false;
    }
}

const webpackConfig = {
    mode: process.env.NODE_ENV,
    entry: {
        //styles: helpers.root('assets/sass/style.scss'),        
        style: helpers.root('assets/sass/style.scss'),

        main: helpers.root('assets/js/main'),
    },
    output: {
        path: rootOutput,
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
    },
    resolve: {
        extensions: ['.js', '.scss'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: { compact: false }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
            },
            /*{
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            includePaths: config.scss.map((item) => {
                                console.log("ITEM", item);
                                return "wwwroot/dist/" + item.name;
                            })                            
                        }
                    },
                ]
            },*/
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            outputPath: "images",
                            publicPath: "images",
                        },
                    },
                ],
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            outputPath: "fonts",
                            publicPath: "fonts",
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                whileStyles: {
                    name: 'style',
                    test: (m, c, entry = 'style') =>
                        m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
                    chunks: 'all',
                    enforce: true,
                },

            }
        }
    },
    /*optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.(css|scss)$/i,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },*/
    plugins: [
        new WebpackBar({
            name: 'DMMS',
            profile: false,
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            //moduleFilename: ({ name }) => `${name.replace('/js/', '/css/')}.css`,
        })
        //  ,
        //new CompressionPlugin({
        //  test: /\.(js|css)$/,
        //  asset: '[path].gz[query]',
        //  algorithm: 'gzip',
        //  deleteOriginalAssets: true
        //})
    ],
};


module.exports = webpackConfig;