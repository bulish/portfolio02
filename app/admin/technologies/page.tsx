import { NextPage } from 'next'
import AdminSidebar from '@components/admin/Sidebar'
import AdminTable from '@components/admin/AdminTable'
import { technologiesTableConfig } from '@data/adminTableConfig'
import { getTechnologies } from '@utils/technologies'

const Technologies: NextPage = async () => {
  const technologies = await getTechnologies()

  return (
    <main className="pt-32 w-full max-width">
      <h1 className="heading-1">Technologies</h1>
      <div className="relative pt-8 w-full h-full flex lg:flex-row flex-col lg:gap-16 gap-4">
        <AdminSidebar />
        <AdminTable data={technologies} config={technologiesTableConfig} />
      </div>
    </main>
  )
}

export default Technologies
