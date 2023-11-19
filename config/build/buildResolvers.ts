import { IOptions } from "../types/types";

export const buildResolvers = (options: IOptions) => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': options.path.src
    }
  }
};
