/*
 * @Author: your name
 * @Date: 2021-12-30 22:42:55
 * @LastEditTime: 2022-01-13 13:04:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /jira/src/screens/project-list/index.jsx
 */
import React from 'react'
import { Search } from './search';
import { List} from './list';
import { useState, useEffect } from 'react'
import { cleanObject, useMount, useDebounce } from '../../utils/index'
import { useHttp } from '../../utils/http';
import styled from '@emotion/styled';
import { Typography } from 'antd';

export const ProjectList = ()=> {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  }) ;
  const [list, setList] = useState([])
  const [users, setUsers] = useState([])
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);

  const debounceParam = useDebounce(param, 2000)
  const client = useHttp();

  useEffect(() => {
    setLoading(true)
    client('projects', {data: cleanObject(debounceParam)})
    .then(setList)
    .catch(error=> {
      setList([])
      setError(error);
    })
    .finally(()=> setLoading(false))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceParam])

  useMount(() => {
    client('users').then(setUsers);
  })
  return <Container>
    <h1>项目列表</h1>
    <Search users={users} param={param} setParam={setParam}/>
    {error ? <Typography.Text>{error.message}</Typography.Text>:null}
    <List loading={isLoading} users={users} dataSource={list}/>
  </Container>
}

const Container = styled.div`
  padding: 3.2rem;
`