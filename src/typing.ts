export enum LevelType {
  ACTIVE = 'active',
  TIME_SENSITIVE = 'timeSensitive',
  PASSIVE = 'passive',
}

export type ApiHandler = (opts: ApiOptions) => Promise<Response>;

export interface InitOptions {
  sdkKey?: string;
  baseURL?: string;
}

export interface ApiOptions {
  title: string;
  body?: string;
  category?: string;
  automaticallyCopy?: boolean;
  copy?: string;
  url?: string;
  isArchive?: number;
  group?: number;
  icon?: string;
  level?: LevelType;
}

export interface Response {
  code: number;
  message: string;
  timestamp: number;
}

export interface ApiInstance {
  msg: ApiHandler;
  message: ApiHandler;
}
