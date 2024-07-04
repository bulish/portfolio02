import prisma from '@lib/prisma'
import { getServerSession } from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const res = await request.json()
    const result = await prisma.technology.create({
      data: res,
    })

    const session = await getServerSession()
    if (!session) {
      res.status(401).json({
        error: 'User is not authenticated',
      })
      return
    }

    return NextResponse.json({
      data: result,
      mess: 'Technology was added successfully',
    })
  } catch (error) {
    return NextResponse.json(
      {
        error: 'An error occurred while creating the technology',
      },
      { status: 500 }
    )
  }
}
