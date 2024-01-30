import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req: Request, res: Response) {
  const areaBody = await req.json();
  const area = await prisma.serviceArea.create({
    data: areaBody,
    
  });
  return NextResponse.json(area);
}

export async function GET(req: Request, res: Response) {
  const areas = await prisma.serviceArea.findMany({});
  return NextResponse.json(areas);
}

