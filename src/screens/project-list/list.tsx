/*
 * @Author: your name
 * @Date: 2021-12-30 22:43:55
 * @LastEditTime: 2022-01-11 00:11:38
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /jira/src/screens/project-list/list.tsx
 */
import { Table } from 'antd';
import React from 'react';
import { User } from './search'

interface Project{
  id: string,
  name: string,
  personId: string,
  pin: boolean,
  organization: string
}

interface ListProps {
  list: Project[], 
  users: User[],
}

export const List = ({list, users}: ListProps)=> {
  return <Table pagination={false} columns={[{
    title: '名称',
    dataIndex: 'name',
    sorter: (a,b)=> a.name.localeCompare(b.name)
  }, {
    title: '负责人',
    render(value, project) {
      return (
        <span>
          {users.find(user=> user.id === project.personId)?.name || '默认值'}
        </span>
      )
    }
  }]} dataSource={list}></Table>
}