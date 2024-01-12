import { Item} from "@prisma/client";
import prisma from "./prisma" 

const getItems = async (): Promise<Item[]> => {
  const items = await prisma.item.findMany({});
  return items;
};

const getOrders = async (): Promise<OrderType[]> => {
  const orders = await prisma.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
    },
  });
  return orders;
};

const service = {
  getItems,
  getOrders,
};

export default service;
