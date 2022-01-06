/*
 * @Author: your name
 * @Date: 2022-01-06 08:32:40
 * @LastEditTime: 2022-01-06 08:39:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /jira/src/unauthenticated-app/login.tsx
 */

import React, { FormEvent } from 'react';
import { useAuth } from '../context/auth-context';

const apiUrl = process.env.REACT_APP_API_URL;

export const RegisterScreens = ()=> {
  const { register } = useAuth()

  const handleSubmit = (event: FormEvent<HTMLFormElement>)=> {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
    register({username, password})
  }

  return <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="username">用户名</label>
      <input type="text" id={'username'}/>
    </div>
    <div>
      <label htmlFor="password">密码</label>
      <input type="password" id={'password'}/>
    </div>
    <button type={'submit'}>注册</button>
  </form>
}