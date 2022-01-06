/*
 * @Author: your name
 * @Date: 2021-12-30 22:44:49
 * @LastEditTime: 2022-01-05 12:46:23
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /jira/src/screens/project-list/search.tsx
 */
import React from 'react';

export interface User {
  id: string,
  name: string,
  email: string,
  title: string,
  organization: string,
  token: string,
} 

interface Search {
  users: User[],
  param: {
    name: string,
    personId: string,
  },
  setParam: (param: Search['param'])=> void;
}

export const Search = ({users, param, setParam}: Search)=> {
  return <form action="">
    <div>
      <input type="text" value={param.name} onChange={evt=> {setParam({
          ...param,
          name: evt.target.value
        })
      }} />
      <select value={param.personId} onChange={evt=> {setParam({
          ...param,
          personId: evt.target.value
        })
      }} >
        <option value={''}>负责人</option>
        {
          users.map((user)=> {
            return <option value={user.id} key={user.id}>{user.name}</option>
          })
        }
      </select>
    </div>
  </form>
}