/*
 * @Author: your name
 * @Date: 2022-01-05 23:26:25
 * @LastEditTime: 2022-01-16 13:55:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /jira/src/context/auth-context.tsx
 */
import React, { ReactNode, useState } from 'react';
import { User } from '../screens/project-list/search'
import * as auth from '../auth-provider';
import { http } from '../utils/http';
import { useMount } from '../utils';
import { useAsync } from '../utils/use-async';
import { FullPageErrorFallBack, FullPageLoading } from '../components/lib';

interface AuthForm {
  username: string,
  password: string
}

const bootstrapUser = async ()=> {
  let user = null;
  const token = auth.getToken();
  if(token) {
    const data = await http('me', { token })
    user = data.user;
  }
  return user;
}

const AuthContext = React.createContext<{
  user: User | null,
  login: (form: AuthForm)=> Promise<void>,
  register: (form: AuthForm)=> Promise<void>,
  logout: ()=> Promise<void>,
} | undefined>(undefined);
AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({children}: {children: ReactNode})=> {
  const {data: user, error, isLoading, isIdle, isError, run, setData:setUser} = useAsync<User | null>();

  const login = (form: AuthForm)=> auth.login(form).then(setUser)
  const register = (form: AuthForm)=> auth.register(form).then(setUser)
  const logout = ()=> auth.logout().then(user=> setUser(null))

  useMount(()=> {
    run(bootstrapUser());
  })

  if(isIdle || isLoading) {
    return <FullPageLoading></FullPageLoading>
  }

  if(isError) {
    return <FullPageErrorFallBack error={error} />
  }

  return <AuthContext.Provider children={children} value={{user, login, register, logout}} />
}

export const useAuth = ()=> {
  const context = React.useContext(AuthContext);
  if(!context) {
    throw new Error('useAuth必须在AuthProvider中使用')
  }
  return context;
}