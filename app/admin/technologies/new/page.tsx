import { NextPage } from 'next'
import AdminSidebar from '@components/admin/Sidebar'
import * as API_ROUTES from "@constants/apiRoutes"
import * as ROUTES from "@constants/routes"
import CatTechForm from '@components/admin/CatTechForm'
import { getTechnologies } from '@utils/technologies'

const NewTechnology: NextPage = async () => {
  const technologies = await getTechnologies()

  return (
    <main className="pt-32 w-full max-width">
      <h1 className="heading-1">New Technology</h1>
      <div className="relative pt-8 w-full h-full flex gap-16">
        <AdminSidebar />
        <CatTechForm
          allData={technologies}
          tableName='technoogy'
          apiRoute={API_ROUTES.ADD_TECHNOLOGY}
          redirectRoute={ROUTES.ADMIN_TECHNOLOGIES}
        />
      </div>
    </main>
  )
}

export default NewTechnology
