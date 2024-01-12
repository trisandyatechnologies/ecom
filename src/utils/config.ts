export const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "Trisandya Mart";
export const siteAddress =
  process.env.NEXT_PUBLIC_SITE_ADDRESS ?? "https://shop.trisandya.com";
export const appLogo = `${siteAddress}/logo.png`;

export const API_ROOT = `${siteAddress}/api/`;

export const IMAGE_CDN_ROOT = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/`;
export const CN_THUMBNAIL_CONF = "c_thumb,w_200,g_face"; // For Thumbnails
