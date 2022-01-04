/*
 * @Author: your name
 * @Date: 2021-12-29 23:43:27
 * @LastEditTime: 2021-12-31 00:30:16
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /jira/src/App.tsx
 */
import React from 'react';
import './App.css';
import { ProjectList } from './screens/project-list'

function App() {
  return (
    <div className="App">
      <ProjectList />
    </div>
  );
}

export default App;
