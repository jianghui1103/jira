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
  return <table>
    <thead>
      <tr>名称</tr>
      <tr>负责人</tr>
    </thead>
    <tbody>
      {
        list.map(project=>{
          return <tr key={project.personId}>
            <td>{project.name}</td>
            <td>{users.find(user=> user.id === project.personId)?.name || '默认值'}</td>
            </tr>})
      }
    </tbody>
  </table>
}