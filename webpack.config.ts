import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { Configuration as WebpackConfiguration } from 'webpack'
import { Configuration as DevServerConfiguration } from 'webpack-dev-server'

export default (_: never, { mode = 'development' }: IWebpackArgs): Configuration => {
  return {
    mode,

    devtool: mode == 'development' ? 'source-map' : false,
    devServer: {
      hot: true,
      port: 8080
    },

    entry: './src/index',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'user-table-bundle.js',
      publicPath: 'auto'
    },

    resolve: {
      extensions: [ '.ts', '.tsx', '.js', '.jsx' ]
    },

    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
        {
          test: /\.less$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'less-loader',
              options: {
                lessOptions: { javascriptEnabled: true }
              }
            }
          ]
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: 'User Table',
        template: 'public/index.html'
      })
    ]
  }
}

interface IWebpackArgs { mode?: 'development' | 'production' }

interface Configuration extends WebpackConfiguration {
  devServer?: DevServerConfiguration
}
