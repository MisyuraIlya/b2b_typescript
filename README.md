# global dependencies main project
1. npx create-react-app . --template typescript
2. aliasing 
  INSTALL AND CONFIGURE ALIASTING : https://plusreturn.com/blog/how-to-configure-a-path-alias-in-a-react-typescript-app-for-cleaner-imports/
  2.1 - create tsconfig.paths.json in root
  {
      "compilerOptions": {
          "baseUrl": ".",
          "paths": {
              "@/*": [
                  "./src/*"
              ]
          }
      }
  }
  2.2 edit tsconfig add in the button
  "extends": "./tsconfig.paths.json"
  2.3 install @craco/craco
  2.4 creatre craco.config.js in root
  const path = require('path');
  module.exports = {
    webpack: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  };
  2.5 edit package.json scripts
  "scripts": {
      "start": "craco start",
      "build": "craco build",
      "test": "craco test",
      "eject": "craco eject"
  }
3. webpack instalattion 
  3.1 npm install --save-dev webpack webpack-cli webpack-dev-server \
  @babel/core @babel/preset-env @babel/preset-react \
  @babel/preset-typescript babel-loader \
  html-webpack-plugin mini-css-extract-plugin css-loader \
  sass-loader node-sass
  3.2 create webpack.config.js file in root
  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const MiniCssExtractPlugin = require('mini-css-extract-plugin');
  module.exports = {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
    ],
  };
  3.2 add to package.json scripts
  "start:webpack": "webpack serve --mode development",
  "build:webpack": "webpack --mode production"
  3.3 npm install --save-dev tsconfig-paths-webpack-plugin
  3.4 add to webpack config 
  const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
  module.exports = {
    //...
    resolve: {
      plugins: [new TsconfigPathsPlugin()]
    }
  };
4. install tailwind css 
  4.1 npm install -D tailwindcss
  4.2 npx tailwindcss init
  4.3 edit tailwindcss config
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  4.4 put to index.scss
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
5. npx sb init --builder webpack5  

# dependencies main project
6. npm install @reduxjs/toolkit
7. npm install react-redux
8. npm i redux-persist
9. npm i @tanstack/react-query
10. npm install react-hook-form
11. npm i react-router-dom
12. npm install axios 
13. npm install clsx
14. npm install -D @types/js-cookie
15. npm install js-cookie --save
16. npm i moment-timezone
17. npm i use-debounce

# UI Dependencies 
17. npm install sweetalert2
18. npm i swiper
19. npm install react-icons --save
20. npm i react-pro-sidebar
21. npm install -S react-useanimations
22. npm i react-loader-spinner
23. npm i --save react-select