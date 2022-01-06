/*
 * @Author: your name
 * @Date: 2022-01-06 08:32:03
 * @LastEditTime: 2022-01-06 08:48:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /jira/src/authenticated-app.tsx
 */
import React from "react"
import { useAuth } from "./context/auth-context"
import { ProjectList } from './screens/project-list'

export const AuthenticatedApp = ()=> {
  const { logout } = useAuth();
  return <div>
    <button onClick={logout}>登出</button>
    <ProjectList/>
  </div>
}