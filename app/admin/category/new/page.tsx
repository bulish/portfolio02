import { NextPage } from 'next'
import AdminSidebar from '@components/admin/Sidebar'
import { ICategoryOption } from '@modules/CategoryOption'
import CategoriesForm from '@components/admin/CategoriesForm'
import { Status } from '@modules/admin/Status'

const NewCategory: NextPage<{ categories: ICategoryOption[] }> = ({
  categories,
}) => {
  return (
    <main className="pt-32 w-full max-width">
      <h1 className="heading-1">New Category</h1>
      <div className="relative pt-8 w-full h-full flex gap-16">
        <AdminSidebar />
        <CategoriesForm categories={categories} status={Status.NEW} />
      </div>
    </main>
  )
}

export default NewCategory
