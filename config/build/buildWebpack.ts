import webpack from "webpack";
import buildDevServer from "./buildDevServer";
import buildLoaders from "./buildLoaders";
import buildPlugins from "./buildPlugins";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { IOptions } from "../types/types";
import { buildResolvers } from "./buildResolvers";

const buildWebpack = (options: IOptions): webpack.Configuration => {
  const isDev = options.mode === "development";

  return {
    mode: options.mode ?? 'development',
    entry: options.path.entry,
    output: {
      filename: 'bundle.[contenthash].js',
      path: options.path.output,
      clean: true
    },
    module: buildLoaders(options),
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : false,
    devServer: isDev ? buildDevServer(options) : undefined,
    plugins: buildPlugins(options),
  }
};

export default buildWebpack;
