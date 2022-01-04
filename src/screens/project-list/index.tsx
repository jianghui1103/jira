/*
 * @Author: your name
 * @Date: 2021-12-30 22:42:55
 * @LastEditTime: 2021-12-31 12:54:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /jira/src/screens/project-list/index.jsx
 */
import React from 'react'
import { Search } from './search';
import { List} from './list';
import { useState, useEffect } from 'react'
import { cleanObject, useMount, useDebounce } from '../../utils/index'
import * as qs from 'qs'
const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectList = ()=> {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  }) ;
  const [list, setList] = useState([])
  const [users, setUsers] = useState([])
  const debounceParam = useDebounce(param, 2000)

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async response=> {
      if(response.ok) {
        setList(await response.json())
      }
    })
  }, [debounceParam])

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async response=> {
      if(response.ok) {
        setUsers(await response.json())
      }
    })
  })
  return <div>
    <Search users={users} param={param} setParam={setParam}/>
    <List users={users} list={list}/>
  </div>
}