import prisma from "@lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const res = await request.json()
  const result = await prisma.category.update({
    where: {
      id: res.id
    },
    data: {
      label: res.label
    }
  })

  return NextResponse.json({ data: res })
}
