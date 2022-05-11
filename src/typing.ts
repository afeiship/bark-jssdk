export enum LEVEL_TYPE {
  active = 'active',
  time_sensitive = 'timeSensitive',
  passive = 'passive',
}

export enum IOS_SOUND {
  alarm = 'alarm',
  anticipate = 'anticipate',
  bell = 'bell',
  birdsong = 'birdsong',
  bloom = 'birdsong',
  calypso = 'birdsong',
  chime = 'chime',
  choo = 'choo',
  descent = 'descent',
  electronic = 'electronic',
  fanfare = 'fanfare',
  glass = 'glass',
  gotosleep = 'gotosleep',
  healthnotification = 'healthnotification',
  horn = 'horn',
  ladder = 'ladder',
  mailsent = 'mailsent',
  minuet = 'minuet',
  multiwayinvitation = 'multiwayinvitation',
  newmail = 'newmail',
  newsflash = 'newsflash',
  noir = 'noir',
  paymentsuccess = 'paymentsuccess',
  shake = 'shake',
  sherwoodforest = 'sherwoodforest',
  silence = 'silence',
  spell = 'spell',
  suspense = 'suspense',
  telegraph = 'telegraph',
  tiptoes = 'tiptoes',
  typewriters = 'typewriters',
  update = 'update',
}

export type ApiHandler = (opts: ApiOptions) => Promise<Response>;

export interface InitOptions {
  sdkKey?: string;
  baseURL?: string;
}

export interface ApiOptions {
  title: string;
  body?: string;
  sdkKey?: string;
  category?: string;
  automaticallyCopy?: boolean;
  copy?: string;
  url?: string;
  isArchive?: number;
  group?: number;
  icon?: string;
  sound?: IOS_SOUND;
  level?: LEVEL_TYPE;
}

export interface Response {
  code: number;
  message: string;
  timestamp: number;
}

export interface ApiInstance {
  notify: ApiHandler;
  notifyBy: ApiHandler;
}

export const defaultApiCallback: ApiHandler = (_: ApiOptions) => Promise.resolve({} as Response);
