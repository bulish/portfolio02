import React, { FC, useRef } from 'react'
import { SplitButton } from 'primereact/splitbutton'
import { Menu } from 'primereact/menu'
import { IBulkActionsDropdownProps } from '@modules/admin/Dropdown'

export const BulkActionsDropdown: FC<IBulkActionsDropdownProps> = (props: IBulkActionsDropdownProps) => {
  const menuRef = useRef<Menu>(null)
  const openMenu = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (menuRef.current) {
      menuRef.current.toggle(event)
    }
  }

  return (
    <div className='dropdown-splitbutton'>
      <SplitButton
        label="Bulk actions"
        model={props.actions}
        onClick={openMenu}
        disabled={props.disabled}
      />

      <Menu
        model={props.actions}
        popup ref={menuRef}
      />
    </div>
  )
}

