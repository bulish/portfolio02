import prisma from '@lib/prisma'
import { getServerSession } from 'next-auth/next'
import { NextRequest, NextResponse } from 'next/server'

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession()
    if (!session) {
      return NextResponse.json(
        {
          error: 'User is not authenticated',
        },
        { status: 401 }
      )
    }

    const body = await request.json()
    const ids = body

    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json(
        {
          error: 'No IDs provided for deletion',
        },
        { status: 400 }
      )
    }

    const deletedCategories = await prisma.category.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    })

    return NextResponse.json({
      data: deletedCategories,
      message: `${ids.length === 1 ? 'Category was' : 'Categories were'} deleted successfully`,
      deletedIds: ids,
    })
  } catch (error) {
    return NextResponse.json(
      {
        error: 'An error occurred while deleting the categories',
      },
      { status: 500 }
    )
  }
}
