/*
 * @Author: your name
 * @Date: 2021-12-31 00:41:55
 * @LastEditTime: 2022-01-13 12:37:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /jira/src/utils/index.ts
 */
import { useEffect, useState } from 'react';
export const isFalsy = (value: unknown)=> value === 0 ? false : !value;

export const isVoid = (value: unknown)=> value === undefined || value === null || value === '';

export const cleanObject = (object: {[key: string]: unknown})=> {
  const result = {...object};
  Object.keys(result).forEach(key => {
    const value = result[key];
    if(isVoid(value)) {
      delete result[key]
    }
  })
  return result;
}

export const useMount = (callback: ()=> void)=> {
  useEffect(() => {
    callback();
    // TODO
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

// export const debounce = (func, delay)=> {
//   let timeout;
//   return (...param)=> {
//     if(timeout) {
//       clearTimeout(timeout)
//     }
//     timeout = setTimeout(function() {
//       func(...param)
//     }, delay)
//   }
// }

export const useDebounce = <V>(value: V, delay?: number)=> {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    // 每次在value 变化后， 设置一个定时器
    const timeout = setTimeout(()=> setDebouncedValue(value), delay);
    // return会在上一个useEffect 处理完以后再运行
    return ()=> clearTimeout(timeout)
  }, [value, delay])

  return debouncedValue
}