import prisma from "@/lib/prisma";

import { NextResponse } from "next/server";
export interface pincodeParams {
    params: { pincodeId: number };
  }
export async function DELETE(req: Request, {params} :pincodeParams) {
    const Pincode = await prisma.serviceArea.delete({
      where: { id: Number(params.pincodeId)},
    });
    return NextResponse.json(Pincode);
  }