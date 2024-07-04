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
    const result = await prisma.technology.update({
      where: {
        id: res.id,
      },
      data: {
        label_cs: res.label_cs,
        label_en: res.label_en,
      },
    })

    return NextResponse.json({
      data: result,
      mess: 'Technology was updated successfully',
    })
  } catch (error) {
    return NextResponse.json(
      {
        error: 'An error occurred while updating the technology',
      },
      { status: 500 }
    )
  }
}
