import buildWebpack from "./config/build/buildWebpack";
import {Mode, Platform} from "./config/types/types";
import path from "path";


export interface IConfig {
	mode: Mode,
	port: number,
	analyzer: boolean,
	platform: Platform,
};

export default (env: IConfig) => {
	const paths = {
		output: path.resolve(__dirname, 'build'),
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
		public: path.resolve(__dirname, 'public')
	}

	return buildWebpack({
		port: env.port ?? 3003,
		mode: env.mode ?? 'development',
		path: paths,
		analyzer: env.analyzer,
		platform: env.platform ?? 'desktop'
	});
}
