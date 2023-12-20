import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// const loggedInUserId = "6582d402c4e753141edcd9be";

export async function PATCH(
  req: Request,
  { params }: { params: { cartItemId: string } }
) {
  const { quantity } = await req.json();
  const cartItem = await prisma.cartItem.update({
    data: {
      quantity,
    },
    where: {
      id: params.cartItemId,
    },
    include: {
      item: true,
    },
  });
  return NextResponse.json(cartItem);
}
