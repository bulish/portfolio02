import { NextPage } from 'next'
import AdminSidebar from '@components/admin/Sidebar'
import AdminTable from '@components/admin/AdminTable'
import { getCategories } from '@utils/categories'
import { categoriesTableConfig } from '@data/adminTableConfig'

const Categories: NextPage = async () => {
  const categories = await getCategories()

  return (
    <main className="pt-32 w-full max-width">
      <h1 className="heading-1">Categories</h1>
      <div className="relative pt-8 w-full h-full flex lg:flex-row flex-col lg:gap-16 gap-4">
        <AdminSidebar />
        <AdminTable
          data={categories}
          config={categoriesTableConfig} />
      </div>
    </main>
  )
}

export default Categories
