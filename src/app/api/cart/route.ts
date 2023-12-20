import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

const loggedInUserId = "6582d402c4e753141edcd9be";

export async function GET(req: Request, res: Response) {
  const items = await prisma.user.findUnique({
    where: {
      id: loggedInUserId,
    },
    include: {
      cart: {
        include: {
          item: true,
        },
      },
    },
  });
  return NextResponse.json(items);
}

export async function POST(req: Request, res: Response) {
  const { itemId } = await req.json();
  const cartItem = await prisma.cartItem.create({
    data: {
      item: {
        connect: {
          id: itemId,
        },
      },
      user: {
        connect: {
          id: loggedInUserId,
        },
      },
    },
  });
  return NextResponse.json([]);
}
