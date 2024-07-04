import prisma from '@lib/prisma'
import { CatTechReq } from '@modules/forms/CatTechForm'

export async function getTechnologies() {
  const technologies = await prisma.technology.findMany()
  return technologies.map(technology => ({
    id: technology.id,
    label_cs: technology.label_cs,
    label_en: technology.label_en,
    value: technology.id,
  }))
}

export async function getTechnologyById(id: string): Promise<CatTechReq | null> {
  try {
    if (!id) {
      throw new Error('ID parameter is missing or invalid')
    }

    const technology = await prisma.technology.findUnique({
      where: { id },
    })

    if (!technology) return null
    return {
      id: technology.id,
      label_cs: technology.label_cs,
      label_en: technology.label_en,
      value: technology.id,
    }
  } catch (error) {
    console.error(`Error fetching technology by id ${id}:`, error)
    return null
  }
}
