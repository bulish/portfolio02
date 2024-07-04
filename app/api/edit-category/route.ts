import prisma from '@lib/prisma'
import { getServerSession } from 'next-auth/next'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession()
    if (!session) {
      NextResponse.json(
        {
          error: 'User is not authenticated',
        },
        { status: 401 }
      )
    }
    
    const res = await request.json()
    const result = await prisma.category.update({
      where: {
        id: res.id,
      },
      data: {
        label: res.label,
      },
    })

    return NextResponse.json({
      data: result,
      mess: 'Category was updated successfully',
    })
  } catch (error) {
    console.error('Error updating category:', error)

    return NextResponse.json(
      {
        error: 'An error occurred while updating the category',
      },
      { status: 500 }
    )
  }
}
