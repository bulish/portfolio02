import prisma from "@lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const res = await request.json()
  const result = await prisma.category.create({
    data: res
  })

  return NextResponse.json({ data: res })
}
