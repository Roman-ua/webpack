import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {IOptions} from "../types/types";
import ReactRefreshTypeScript from 'react-refresh-typescript';
import {buildBabelLoader} from "./babel/buildBabelLoader";

const buildLoaders = (options: IOptions) => {
  const isDev = options.mode === "development";

  const cssLoaderModules = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDev ? '[path][name]_[local]' : '[hash:base64:8]'
      },
    },
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      cssLoaderModules,
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [{
      loader: 'ts-loader',
      options: {
        getCustomTransformers: () => ({
          before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
        }),
        transpileOnly: isDev
      }
    }],
  };

  const babelLoader = buildBabelLoader(options);

  const imgLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const svgrLoader =  {
    test: /\.svg$/i,
    use: [{
      loader: '@svgr/webpack',
      options: {
        icon: true,
        svgoConfig: {
          plugins: [{
            name: 'convertColors',
            params: {
              currentColor: true
            }
          }]
        }
      }
    }],
  }

  return {
    rules: [
      scssLoader,
      // tsLoader,
      imgLoader,
      svgrLoader,
      babelLoader
    ],
  }
};

export default buildLoaders;
