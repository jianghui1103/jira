/*
 * @Author: your name
 * @Date: 2021-12-30 22:42:55
 * @LastEditTime: 2022-01-19 13:06:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /jira/src/screens/project-list/index.jsx
 */
import React from 'react'
import { Search } from './search';
import { List } from './list';
import { useState } from 'react'
import { useDebounce, useDocumentTitle } from '../../utils/index'
import styled from '@emotion/styled';
import { Typography } from 'antd';
import { useProjects } from '../../utils/project';
import { useUsers } from '../../utils/user';

export const ProjectList = ()=> {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const debounceParam = useDebounce(param, 2000)
  const { isLoading, error, data:list } = useProjects(debounceParam);
  const { data: users } = useUsers();
  useDocumentTitle('项目列表')
  return <Container>
    <h1>项目列表</h1>
    <Search users={users || []} param={param} setParam={setParam}/>
    {error ? <Typography.Text>{error.message}</Typography.Text>:null}
    <List loading={isLoading} users={users || []} dataSource={list || []}/>
  </Container>
}

const Container = styled.div`
  padding: 3.2rem;
`