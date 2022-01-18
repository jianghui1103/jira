/*
 * @Author: your name
 * @Date: 2022-01-14 12:56:03
 * @LastEditTime: 2022-01-14 13:00:32
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /jira/src/utils/project.ts
 */
import { useEffect } from "react";
import { useAsync } from "./use-async";
import { Project } from '../screens/project-list/list';
import { useHttp } from "./http";
import { cleanObject } from ".";

export const useProjects = (param?: Partial<Project>)=> {
  const { run, ...result } = useAsync<Project[]>();
  const client = useHttp();
  
  useEffect(() => {
    run(client('projects', {data: cleanObject(param || {})}))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param])

  return result
}