
module.exports = {
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
}