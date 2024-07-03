import prisma from '@lib/prisma'
import { ICategoryOption } from '@modules/CategoryOption'

export async function getCategories() {
  const categories = await prisma.category.findMany()
  return categories.map(category => ({
    id: category.id,
    label: category.label,
    value: category.id,
  }))
}

export async function getCategoryById(
  id: string
): Promise<ICategoryOption | null> {
  console.log(id)
  try {
    if (!id) {
      throw new Error('ID parameter is missing or invalid')
    }

    const category = await prisma.category.findUnique({
      where: { id },
    })

    if (!category) return null

    console.log(category)
    return {
      id: category.id,
      label: category.label,
      value: category.id,
    }
  } catch (error) {
    console.error(`Error fetching category by id ${id}:`, error)
    return null
  }
}
