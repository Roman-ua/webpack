export type Mode = "development" | "production";
export type Platform = "mobile" | "desktop";

export interface IOptionPaths {
  entry: string;
  html: string;
  output: string;
  src: string;
  public: string;
}
export interface IOptions {
  port: number;
  path: IOptionPaths;
  mode: Mode;
  analyzer?: boolean,
  platform: Platform
}
