import { NextPage } from 'next'
import AdminSidebar from '@components/admin/Sidebar'
import AdminTable from '@components/admin/AdminTable'
import { getCategories } from '@utils/categories'
import { categoriesTableConfig } from '@data/adminTableConfig'
import Button from '@components/shared/Button'
import { ButtonType } from '@modules/Button'
import AdminButton from '@components/admin/Buttons'

const Categories: NextPage = async () => {
  const categories = await getCategories()

  return (
    <main className="pt-32 w-full max-width">
      <div className="flex justify-between items-center">
        <h1 className="heading-1">Categories</h1>

        <AdminButton
          type={ButtonType.add}
          tableName={categoriesTableConfig.tableName}
        />
      </div>

      <div className="relative pt-8 w-full h-full flex gap-16">
        <AdminSidebar />
        <AdminTable data={categories} config={categoriesTableConfig} />
      </div>
    </main>
  )
}

export default Categories
