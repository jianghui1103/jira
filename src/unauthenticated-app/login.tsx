/*
 * @Author: your name
 * @Date: 2022-01-06 08:32:40
 * @LastEditTime: 2022-01-11 13:05:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /jira/src/unauthenticated-app/login.tsx
 */

import React, { FormEvent } from 'react';
import { useAuth } from '../context/auth-context';
import { Button, Form, Input } from 'antd';
import { LongButton } from './index';

const apiUrl = process.env.REACT_APP_API_URL;

export const LoginScreens = ()=> {
  const { login } = useAuth()

  const handleSubmit = (values: { username: string, password: string })=> {
    login(values)
  }

  return <Form onFinish={handleSubmit}>
    <Form.Item name={'username'} rules={[{required: true, message: '请输入用户名'}]}>
      <Input placeholder={'用户名'} type="text" id={'username'}/>
    </Form.Item>
    <Form.Item name={'password'} rules={[{required: true, message: '请输入密码 '}]}>
      <Input placeholder={'密码'} type="password" id={'password'}/>
    </Form.Item>
    <Form.Item name={'password'} rules={[{required: true, message: '请输入密码 '}]}>
      <LongButton htmlType={'submit'} type={'primary'}>登录</LongButton>
    </Form.Item>
  </Form>
}