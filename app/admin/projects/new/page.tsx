import { NextPage } from 'next'
import ProjectsForm from '@components/admin/ProjectsForm'
import AdminSidebar from '@components/admin/Sidebar'
import { getCategories } from '@utils/categories'

const NewProject: NextPage = async () => {
  const categories = await getCategories()

  return (
    <main className="pt-32 w-full max-width">
      <h1 className="heading-1">New Project</h1>
      <div className="relative pt-8 w-full h-full flex gap-16">
        <AdminSidebar />
        <ProjectsForm categories={categories} />
      </div>
    </main>
  )
}

export default NewProject
