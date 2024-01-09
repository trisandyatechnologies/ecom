import { CN_THUMBNAIL_CONF, IMAGE_CDN_ROOT } from "./config";

export const getImage = (path: string) => `${IMAGE_CDN_ROOT}${path}`;
export const getThumbnail = (path: string) =>
  `${IMAGE_CDN_ROOT}${CN_THUMBNAIL_CONF}/${path}`;
