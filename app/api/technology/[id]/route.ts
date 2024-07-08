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
    const ids  = body

    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json(
        {
          error: 'No IDs provided for deletion',
        },
        { status: 400 }
      )
    }

    const deletedTechnologies = await prisma.technology.deleteMany({
      where: {
        id: {
          in: ids as string[],
        },
      },
    })

    return NextResponse.json({
      data: deletedTechnologies,
      message: `${ids.length === 1 ? 'Technology was' : 'Technologies were'} deleted successfully`,
      deletedIds: ids,
    })
  } catch (error) {
    return NextResponse.json(
      {
        error: 'An error occurred while deleting',
      },
      { status: 500 }
    )
  }
}
