'use server'

import { NextPage } from 'next'
import AdminSidebar from '@components/admin/Sidebar'
import * as API_ROUTES from "@constants/apiRoutes"
import * as ROUTES from "@constants/routes"
import { getCategories, getCategoryById } from '@utils/categories'
import CatTechForm from '@components/admin/CatTechForm'

const EditCategory: NextPage<{
  params: any
}> = async ({ params }) => {
  const data = await getCategoryById(params.id)
  const categories = await getCategories()

  return (
    <main className="pt-32 w-full max-width">
      <h1 className="heading-1">Edit Category</h1>
      <div className="relative pt-8 w-full h-full flex gap-16">
        <AdminSidebar />
        <CatTechForm
          allData={categories}
          activeData={data}
          tableName='category'
          apiRoute={API_ROUTES.EDIT_CATEGORY}
          redirectRoute={ROUTES.ADMIN_CATEGORIES}
        />
      </div>
    </main>
  )
}

export default EditCategory
