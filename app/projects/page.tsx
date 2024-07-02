import { NextPage } from "next"
import prisma from "@lib/prisma"

async function getProjects() {
  const projects = await prisma.project.findMany({
    where: { published: true },
  })

  return projects
}

const Projects: NextPage = async () => {
  const projects = await getProjects()
  console.log({projects})

  return (
    <main className="pt-24 w-full max-width h-full">
      <h1>projects</h1>
    </main>
  );
}

export default Projects
