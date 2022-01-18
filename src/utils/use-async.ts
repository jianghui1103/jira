/*
 * @Author: your name
 * @Date: 2022-01-14 12:36:17
 * @LastEditTime: 2022-01-15 01:04:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /jira/src/utils/use-async.ts
 */
import { useState } from "react"

interface State<D> {
  error: Error | null;
  data: D | null;
  stat: 'idle' | 'loading' | 'error' | 'success' 
}

const defalutInitialState: State<null> = {
  stat: 'idle',
  data: null,
  error: null
}

const defalutConfig = {
  throwOnError: false
  
}

export const useAsync = <D>(initialState?: State<D>, initalConfig?: typeof defalutConfig)=> {
  const config = {...defalutConfig, initalConfig};

  const [state, setState] = useState<State<D>>({
    ...defalutInitialState,
    ...initialState
  })

  const setData = (data:  D)=> setState({
    data,
    stat: 'success',
    error: null
  })

  const setError = (error:  Error)=> setState({
    error,
    stat: 'error',
    data: null
  })

  // Run 用来触发异步请求
  const run = (promise:  Promise<D>)=> {
    if(!promise || !promise.then) {
      throw new Error("请传入promise 数据");
      
    }
    setState({
      ...state,
      stat: 'loading'
    })

    return promise.then(data=> {
      setData(data);
      return data;
    }).catch(error=> {
      setError(error);
      if(config.throwOnError) {
        return Promise.reject(error);
      }
      return error;
    })
  }

  return {
    isIdle: state.stat === 'idle',
    isLoading: state.stat === 'loading',
    isSuccess: state.stat === 'success',
    isError: state.stat === 'error',
    run,
    setData,
    setError,
    ...state
  }

}