'use client'

import { ButtonType, IButton } from '@modules/Button'
import { IAdminTableProps } from '@modules/admin/Table'
import AdminButton from './Buttons'

const AdminTable = <T extends { [key: string]: string | number }>({
  data,
  config,
}: IAdminTableProps<T>) => {
  const { colgroups, thead, parameters, buttons } = config

  return (
    <div className="w-full">
      <table className="w-full border border-borders">
        <colgroup>
          {colgroups.map((width: number, key: number) => {
            return <col key={key} style={{ width: width + '%' }} />
          })}
        </colgroup>

        <thead className="border-b-2 border-borders">
          <tr>
            {thead.map((item: string, key: number) => {
              return (
                <th
                  key={key}
                  className={`text-left py-2 px-4 ${key < thead.length - 1 ? 'border-r border-borders' : ''}`}
                >
                  {item}
                </th>
              )
            })}
          </tr>
        </thead>

        <tbody>
          {data.map((item: T, key: number) => {
            const wantedParams = Object.keys(item).filter(i =>
              parameters.includes(i))
            return (
              <tr key={key} className="border-b border-borders">
                {wantedParams.map((param: string, paramKey: number) => {
                  return (
                    <td
                      key={paramKey}
                      className={`text-left py-2 px-4 ${paramKey < thead.length - 1 ? 'border-r border-borders' : ''}`}
                    >
                      {item[param]}
                    </td>
                  )
                })}

                {buttons.map((button: IButton, buttonKey: number) => {
                  return (
                    <td
                      key={buttonKey}
                      className={`text-left py-2 px-4 ${buttonKey < thead.length - 1 ? 'border-r border-borders' : ''}`}
                    >
                      <AdminButton
                        type={button.type as ButtonType}
                        tableName={config.tableName}
                        id={item.id as string}
                      />
                    </td>
                  )
                })}
              </tr>
            )
          })}

          {data.length === 0 && (
            <tr>
              <td
                colSpan={thead.length}
                className="bg-terniary border border-borders p-4 text-center"
              >
                <p className="label">No data available</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default AdminTable
