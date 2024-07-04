'use server'

import { NextPage } from 'next'
import AdminSidebar from '@components/admin/Sidebar'
import * as API_ROUTES from "@constants/apiRoutes"
import * as ROUTES from "@constants/routes"
import CatTechForm from '@components/admin/CatTechForm'
import { getTechnologies, getTechnologyById } from '@utils/technologies'

const EditTechnology: NextPage<{
  params: any
}> = async ({ params }) => {
  const data = await getTechnologyById(params.id)
  const technologies = await getTechnologies()

  return (
    <main className="pt-32 w-full max-width">
      <h1 className="heading-1">Edit Technology</h1>
      <div className="relative pt-8 w-full h-full flex gap-16">
        <AdminSidebar />
        <CatTechForm
          allData={technologies}
          activeData={data}
          tableName='technology'
          apiRoute={API_ROUTES.EDIT_TECHNOLOGY}
          redirectRoute={ROUTES.ADMIN_TECHNOLOGIES}
        />
      </div>
    </main>
  )
}

export default EditTechnology
