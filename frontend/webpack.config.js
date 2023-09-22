const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InterpolateHtmlPlugin = require('interpolate-html-plugin')

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build/static')
    },
    optimization: {
        splitChunks: {
          chunks: 'all',
        },
   
      },
    devServer: {
        port: 3000,
        hot: true,
        open: true,
        proxy: {
            '/backendA': {
                target: 'http://localhost:3000',
                router: () => process.env.BACKEND_A_URI || 'http://localhost:3001',
                pathRewrite: { '^/backendA': '' },
            },
            '/backendB': {
                target: 'http://localhost:3000',
                router: () => process.env.BACKEND_B_URI || 'http://localhost:3001',
                pathRewrite: { '^/backendB': '' },
            },
        }
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
            
        }),
        new InterpolateHtmlPlugin({
            'NODE_ENV': 'development',
            'PUBLIC_URL': ''
          })
    ]
}
