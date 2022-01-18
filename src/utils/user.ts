/*
 * @Author: your name
 * @Date: 2022-01-14 13:02:58
 * @LastEditTime: 2022-01-14 13:07:00
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /jira/src/utils/user.ts
 */
import { useEffect } from "react";
import { cleanObject } from ".";
import { User } from "../screens/project-list/search";
import { useHttp } from "./http";
import { useAsync } from "./use-async"

export const useUsers = (param?: Partial<User>)=> {
  const { run, ...result } = useAsync<User[]>();
  const client = useHttp();

  useEffect(() => {
    run(client('users', {data: cleanObject(param || {})}))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param])

  return result;
}