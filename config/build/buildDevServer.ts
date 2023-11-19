import { IOptions } from "../types/types";

const buildDevServer = (options: IOptions) => {
  return {
    port: options.port ?? 8000,
    open: true,
    historyApiFallback: true,
    hot: true
  }
};

export default buildDevServer;
