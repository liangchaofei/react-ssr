const path =  require('path')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge').default;
const config = require('./webpack.base.js');


const serverConfig = {
    mode: 'development',
    target: 'node', // 告诉webpack打包node代码
    entry: './src/server/index.js',
    output: {
        filename: 'bundle.js',
        path:  path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['react', 'stage-0', ['env', {
                        target: {
                            browsers: ['last 2 versions'] // 兼容最后两个版本
                        }
                    }]], // 结合  babel-preset-react, babel-preset-stage-0, babel-preset-env
                }
            }
        ]
    }
};

module.exports = merge(config, serverConfig)