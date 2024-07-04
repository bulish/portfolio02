import prisma from '@lib/prisma'
import { CatTechReq } from '@modules/forms/CatTechForm'

export async function getCategories() {
  const categories = await prisma.category.findMany()
  return categories.map(category => ({
    id: category.id,
    label_cs: category.label_cs,
    label_en: category.label_en,
    value: category.id,
  }))
}

export async function getCategoryById(id: string): Promise<CatTechReq | null> {
  try {
    if (!id) {
      throw new Error('ID parameter is missing or invalid')
    }

    const category = await prisma.category.findUnique({
      where: { id },
    })

    if (!category) return null
    return {
      id: category.id,
      label_cs: category.label_cs,
      label_en: category.label_en,
      value: category.id,
    }
  } catch (error) {
    console.error(`Error fetching category by id ${id}:`, error)
    return null
  }
}
