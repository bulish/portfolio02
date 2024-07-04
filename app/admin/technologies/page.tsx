import { NextPage } from 'next'
import AdminSidebar from '@components/admin/Sidebar'
import AdminTable from '@components/admin/AdminTable'
import { technologiesTableConfig } from '@data/adminTableConfig'
import { ButtonType } from '@modules/Button'
import AdminButton from '@components/admin/Buttons'
import { getTechnologies } from '@utils/technologies'

const Technologies: NextPage = async () => {
  const technologies = await getTechnologies()

  return (
    <main className="pt-32 w-full max-width">
      <div className="flex justify-between items-center">
        <h1 className="heading-1">Technologies</h1>

        <AdminButton
          type={ButtonType.add}
          tableName={technologiesTableConfig.tableName}
        />
      </div>

      <div className="relative pt-8 w-full h-full flex gap-16">
        <AdminSidebar />
        <AdminTable data={technologies} config={technologiesTableConfig} />
      </div>
    </main>
  )
}

export default Technologies
