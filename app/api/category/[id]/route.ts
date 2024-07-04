import prisma from '@lib/prisma'
import { getServerSession } from 'next-auth/next'
import { NextRequest, NextResponse } from 'next/server'

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params

    const session = await getServerSession()
    if (!session) {
      NextResponse.json(
        {
          error: 'User is not authenticated',
        },
        { status: 401 }
      )
    }

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
