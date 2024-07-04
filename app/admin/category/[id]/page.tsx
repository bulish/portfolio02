'use server'

import { NextPage } from 'next'
import AdminSidebar from '@components/admin/Sidebar'
import { ICategoryOption } from '@modules/CategoryOption'
import CategoriesForm from '@components/admin/CategoriesForm'
import { Status } from '@modules/admin/Status'
import { getCategoryById } from '@utils/categories'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import * as ROUTES from "@constants/routes"

const EditCategory: NextPage<{
  categories: ICategoryOption[]
  params: Params
}> = async ({ categories, params }) => {
  const data = await getCategoryById(params.id)
  const session = await getServerSession()

  if (!session || !session.user) redirect(ROUTES.LOGIN)

  return (
    <main className="pt-32 w-full max-width">
      <h1 className="heading-1">Edit Category</h1>
      <div className="relative pt-8 w-full h-full flex gap-16">
        <AdminSidebar />
        <CategoriesForm
          categories={categories}
          status={Status.EDIT}
          data={data}
        />
      </div>
    </main>
  )
}

export default EditCategory
