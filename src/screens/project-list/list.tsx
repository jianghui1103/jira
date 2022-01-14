/*
 * @Author: your name
 * @Date: 2021-12-30 22:43:55
 * @LastEditTime: 2022-01-13 12:56:26
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /jira/src/screens/project-list/list.tsx
 */
import React from 'react';
import { Table, TableProps } from 'antd';
import dayjs from 'dayjs';
import { User } from './search'

interface Project{
  id: string,
  name: string,
  personId: string,
  pin: boolean,
  organization: string,
  created: number
}

interface ListProps extends TableProps<Project> {
  users: User[],
}

export const List = ({users, ...props}: ListProps)=> {
  return <Table pagination={false} columns={[{
    title: '名称',
    dataIndex: 'name',
    sorter: (a,b)=> a.name.localeCompare(b.name)
  },{
    title: '部门',
    dataIndex: 'organization',
  }, {
    title: '负责人',
    render(value, project) {
      return (
        <span>
          {users.find(user=> user.id === project.personId)?.name || '默认值'}
        </span>
      )
    }
  }, {
    title: '创建时间',
    render(value, project) {
      return (
        <span>{project.created ? dayjs(project.created).format('YYYY-MM-DD') : '无'}</span>
      )
    }
  }]} 
  {...props}
  ></Table>
}