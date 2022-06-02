import React, { useState } from 'react'
import ResizeObserver from 'rc-resize-observer'
import { Image, Table, TableColumnsType } from 'antd'
import dayjs from 'dayjs'

import { IUser } from '../../models'
import { IUsersTableProps } from './types'

import './users-table.less'

export const UsersTable = ({ loading, users }: IUsersTableProps) => {
  const [ height, setTableHeight ] = useState(undefined)

  const heighDelta = 39 // 39 - высота заголовка таблицы
  return <ResizeObserver onResize={({ height: componentHeight }) => setTableHeight(Math.max(0, componentHeight - heighDelta))}>
    <div className="users-table">
      <Table size="small" loading={loading} dataSource={users} columns={columns}
        scroll={{ y: height }} pagination={false} rowKey={keySelector}
        onRow={(user) => ({ onDoubleClick: () => console.log(user) })} />
    </div>
  </ResizeObserver>
}

const keySelector = (user: IUser) => user.login.uuid

const columns: TableColumnsType<IUser> = [
  {
    dataIndex: 'picture',
    width: 64,
    render: ({ thumbnail, large }) => <Image src={thumbnail} preview={{ src: large }} alt="photo" />
  },
  {
    title: 'Имя пользователя',
    dataIndex: [ 'login', 'username' ]
  },
  {
    title: 'Полное имя',
    dataIndex: 'name',
    render: ({ title, first, last }) => `${title} ${first} ${last}`
  },
  {
    title: 'Email',
    dataIndex: 'email'
  },
  {
    title: 'Телефон',
    dataIndex: 'cell'
  },
  {
    title: 'Возраст',
    dataIndex: [ 'dob', 'age' ]
  },
  {
    title: 'Дата регистрации',
    dataIndex: [ 'registered', 'date' ],
    render: (date: string) => dayjs(date).format('D MMMM YYYY ')
  }
]
