/*
 * @Author: your name
 * @Date: 2021-12-30 22:44:49
 * @LastEditTime: 2022-01-12 12:42:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /jira/src/screens/project-list/search.tsx
 */
import { Form, Input, Select } from 'antd';
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

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const Search = ({users, param, setParam}: Search)=> {
  return <Form style={{marginBottom: '2rem'}} layout={"inline"}>
    <Form.Item>
      <Input placeholder="项目名" type="text" value={param.name} onChange={evt=> {setParam({
          ...param,
          name: evt .target.value
        })
      }} />
    </Form.Item>
    <Form.Item>
      <Select value={param.personId} onChange={value=> {setParam({
          ...param,
          personId: value
        })
      }} >
        <Select.Option value={''}>负责人</Select.Option>
        {
          users.map((user)=> {
            return <Select.Option value={user.id} key={user.id}>{user.name}</Select.Option>
          })
        }
      </Select>
    </Form.Item>
  </Form>
}