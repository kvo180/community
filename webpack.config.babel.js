import webpack from 'webpack';
import path from 'path';

const config = {
  entry: './web/src/app',
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'web/src'),
        exclude: ['node_modules'],
        use: [
          { loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react', 'stage-0']
            }
          }
        ]
      }
    ]
  }
};

export default config;
