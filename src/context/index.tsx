/*
 * @Author: your name
 * @Date: 2022-01-05 23:45:15
 * @LastEditTime: 2022-01-13 12:46:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /jira/src/context/index.tsx
 */
import React,{ ReactNode } from "react";
import { AuthProvider } from './auth-context'
import { QueryClientProvider, QueryClient } from 'react-query'

export const AppProviders = ({children}: {children: ReactNode})=> {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AuthProvider>
        {children}
      </AuthProvider>
    </QueryClientProvider>
  )
  // <AuthProvider>
  // </AuthProvider>
}