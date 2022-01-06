/*
 * @Author: your name
 * @Date: 2022-01-05 12:41:49
 * @LastEditTime: 2022-01-05 23:37:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /jira/src/auth-provider.ts
 */
import { User } from './screens/project-list/search'
const lacalStorageKey = '__auth_provider_token__'
const apiUrl = process.env.REACT_APP_API_URL;

export const getToken = ()=> window.localStorage.getItem(lacalStorageKey)

export const handleUserResponse = ({user}: {user: User})=> {
  window.localStorage.setItem(lacalStorageKey, user.token || '');
  return user
}

export const login = (data: {username: string, password: string})=> {
  return fetch(`${apiUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(async (response: Response)=> {
    if(response.ok) {
      return handleUserResponse(await response.json());
    } else {
      return Promise.reject(data);
    }
  })
}

export const register = (data: {username: string, password: string})=> {
  return fetch(`${apiUrl}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(async (response: Response)=> {
    if(response.ok) {
      return handleUserResponse(await response.json());
    } else {
      return Promise.reject(data);
    }
  })
}

export const logout = async ()=> window.localStorage.removeItem(lacalStorageKey)