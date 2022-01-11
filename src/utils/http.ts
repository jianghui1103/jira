/*
 * @Author: your name
 * @Date: 2022-01-06 12:23:20
 * @LastEditTime: 2022-01-11 00:01:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /jira/src/utils/http.ts
 */
import qs from 'qs';
import * as auth from '../auth-provider';
import { useAuth } from '../context/auth-context';
const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
  data?: object,
  token?: string
}

export const http = async (endpoint: string, { data, token, headers, ...customConfig }: Config = {})=> {
  const config = {
    method: 'GET',
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': data? 'application/json' : '',
    },
    ...customConfig
  }

  if(config.method.toUpperCase() === 'GET') {
    endpoint+=`?${qs.stringify(data)}`
  }else{
    config.body = JSON.stringify(data || {})
  }


  return window.fetch(`${apiUrl}/${endpoint}`, config)
    .then(async response=> {
      if(response.status === 401) {
        await auth.logout();
        window.location.reload();
        return Promise.reject({message: '请重新登录'});
      } 
      const data = await response.json();
      if(response.ok) {
        return data;
      }else{
        return Promise.reject(data);
      }
    })
} 

export const useHttp = ()=> {
  const { user } = useAuth();
  // utility type 的用法： 用泛型给它传入一个其他类型，然后utility type对这个类型进行某种操作
  return (...[endpoint, config]: Parameters<typeof http>)=> http(endpoint, {...config, token: user?.token})
}

let myNumber: string | number ;
myNumber = 'ss';
myNumber = 7;
// 会报错 
// myNumber = {};

// 类型别名
// type Fnumber = string | number;
// let roseNumber:Fnumber = '6';

// 类型别名在很多情况下可以和interface互换
// interface Person {
//   name: string
// }
// type Person = { name: string }
// const xiaoMing:Person = {name:'xiao'}
// 类型别名， interface 在这种情况下没发替代type
// type Fnumber = string | number;

type Person = {
  name: string,
  age: number
}
// 可以没有名字或者年龄
const xiaoMing:Partial<Person> = {name:'xiao'}

// 删除name属性
const shenmiren: Omit<Person, 'name'> = {age:2}
// 删除name 和  age 属性
const shenmiren1: Omit<Person, 'name' | 'age'> = {}
