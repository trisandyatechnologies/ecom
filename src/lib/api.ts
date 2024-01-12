import { API_ROOT } from "@/utils/config";
import { Item, User } from "@prisma/client";

export const getItems = async () => {
  const items = await fetch(`${API_ROOT}items`).then((res) => res.json());
  return items;
};

export const getItemsByQuery = async (q: string) => {
  const items = await fetch(`${API_ROOT}items?q=${q}`).then((res) =>
    res.json()
  );
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

export const addItem = async (item: Item) => {
  const product = await fetch(`${API_ROOT}/items`, {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  return product;
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

export const getUser = async (userId: string) => {
  const user = await fetch(`${API_ROOT}users/${userId}`).then((res) =>
    res.json()
  );
  return user;
};

export const updateUser = async (
  userId: string,
  updateBody: Partial<User>
): Promise<User> => {
  const user = await fetch(`${API_ROOT}users/${userId}`, {
    method: "PUT",
    body: JSON.stringify(updateBody),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  return user;
};
