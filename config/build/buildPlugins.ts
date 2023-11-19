import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugin, { Configuration } from "mini-css-extract-plugin";
import { IOptions } from "../types/types";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import path from "path";
import CopyPlugin from "copy-webpack-plugin";

const buildPlugins = (options: IOptions) => {
  const isDev = options.mode === "development";

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: options.path.html,
      favicon: path.resolve(options.path.public, 'favicon.png')
    }),
    new MiniCssExtractPlugin({
      filename: 'css/index.[contenthash:8].css',
      chunkFilename: 'css/index.[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __PLATFORM__: JSON.stringify(options.platform),
      __ENV__: JSON.stringify(options.mode),
    }),
    new ForkTsCheckerWebpackPlugin(),
    new CopyPlugin({
      patterns: [{
        from: path.resolve(options.path.src, 'locales'),
        to: path.resolve(options.path.output, 'locales')
      }],
    }),
  ];

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin())
    plugins.push(new ReactRefreshWebpackPlugin())
  }

  if (options.analyzer) {
    plugins.push(new BundleAnalyzerPlugin())
  }

  return plugins;
};

export default buildPlugins;
