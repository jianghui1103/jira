/*
 * @Author: your name
 * @Date: 2022-01-06 08:32:40
 * @LastEditTime: 2022-01-15 01:15:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /jira/src/unauthenticated-app/login.tsx
 */

import React from 'react';
import { useAuth } from '../context/auth-context';
import {  Form, Input } from 'antd';
import { LongButton } from './index';
import { useAsync } from '../utils/use-async';


export const RegisterScreens = ({onError}: {onError:(error: Error)=> void})=> {
  const { register } = useAuth()
  const { run, isLoading} = useAsync(undefined, {throwOnError: true});

  const handleSubmit = async ({cpassword ,...values}: { username: string, password: string, cpassword: string })=> {
    if(cpassword !== values.password) {
      return onError(new Error('请确认输入两次密码相同'))
    }
    try{
      await run(register(values))
    } catch (e) {
      const err = e as Error;
      onError(err)
    }
  }
  return <Form onFinish={handleSubmit}>
    <Form.Item name={'username'} rules={[{required: true, message: '请输入用户名'}]}>
      <Input placeholder={'用户名'} type="text" id={'username'}/>
    </Form.Item>
    <Form.Item name={'password'} rules={[{required: true, message: '请输入密码 '}]}>
      <Input placeholder={'密码'} type="password" id={'password'}/>
    </Form.Item>
    <Form.Item name={'cpassword'} rules={[{required: true, message: '请输入密码 '}]}>
      <Input placeholder={'确认密码'} type="password" id={'cpassword'}/>
    </Form.Item>
    <Form.Item>
      <LongButton loading={isLoading} htmlType={'submit'} type={'primary'}>注册</LongButton>
    </Form.Item>
  </Form>
}