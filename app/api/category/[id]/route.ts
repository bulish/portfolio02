import prisma from "@lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const post = await prisma.category.delete({
    where: { id }
  })

  return NextResponse.json(post)
}
