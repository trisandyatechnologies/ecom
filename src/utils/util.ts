import { CartItem, Category, Item } from "@prisma/client";
import { CN_THUMBNAIL_CONF, IMAGE_CDN_ROOT } from "./config";

export const getImage = (path: string) => `${IMAGE_CDN_ROOT}${path}`;
export const getThumbnail = (path: string) =>
  `${IMAGE_CDN_ROOT}${CN_THUMBNAIL_CONF}/${path}`;

export const categoryItems = Object.keys(Category).map((cat) => ({
  label: cat.replaceAll("_", " "),
  key: cat,
}));

export function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number
): (...args: Params) => void {
  let timer: NodeJS.Timeout;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

export const cartItemFromItem = ({
  id,
  name,
  images,
  description,
  mrp,
  price,
  brand,
  details: { weight },
}: Item): CartItem => ({
  id,
  name,
  image: images[0],
  description: description ?? "",
  mrp,
  price,
  quantity: 1,
  brand: brand ?? "Generic",
  weight,
});
