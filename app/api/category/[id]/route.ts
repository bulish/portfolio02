import prisma from '@lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const post = await prisma.category.delete({
      where: { id },
    })

    return NextResponse.json({
      data: post,
      mess: 'Category was deleted successfully',
    })
  } catch (error) {
    console.error('Error deleting category:', error)

    return NextResponse.json(
      {
        error: 'An error occurred while deleting the category',
      },
      { status: 500 }
    )
  }
}
