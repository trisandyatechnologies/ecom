import { API_ROOT } from "@/utils/config";

export const getItems = async () => {
  const items = await fetch(`${API_ROOT}items`).then((res) => res.json());
  return items;
};

export const getCartItems = async () => {
  const user = await fetch(`${API_ROOT}cart`).then((res) => res.json());
  return user.cart;
};

export const addCartItem = async (itemId: string) => {
  const item = await fetch(`${API_ROOT}cart`, {
    method: "POST",
    body: JSON.stringify({ itemId }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  return item;
};

export const updateCartItemQuantity = async (
  cartItemId: string,
  quantity: number
) => {
  const item = await fetch(`${API_ROOT}cart/${cartItemId}`, {
    method: "PATCH",
    body: JSON.stringify({ quantity }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  return item;
};
