import prisma from "@lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const res = await request.json();
    const result = await prisma.category.create({
      data: res
    });

    return NextResponse.json({
      data: result,
      mess: "Category was added successfully"
    });
  } catch (error) {
    console.error("Error creating category:", error);

    return NextResponse.json({
      error: "An error occurred while creating the category"
    }, { status: 500 });
  }
}
