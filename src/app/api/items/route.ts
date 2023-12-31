import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  const items = await prisma.item.findMany({});
  return NextResponse.json(items);
}

export function POST(req: Request, res: Response) {
  return NextResponse.json([]);
}
