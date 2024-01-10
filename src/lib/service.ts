import { Item } from "@prisma/client";
import prisma from "./prisma";

const getItems = async (): Promise<Item[]> => {
  const items = await prisma.item.findMany({});
  return items;
};

const service = {
  getItems,
};

export default service;
