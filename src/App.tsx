/*
 * @Author: your name
 * @Date: 2021-12-29 23:43:27
 * @LastEditTime: 2022-01-04 23:37:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /jira/src/App.tsx
 */
import React from 'react';
import './App.css';
// import { ProjectList } from './screens/project-list'
import { LoginScreens } from './screens/login'

function App() {
  return (
    <div className="App">
      {/* <ProjectList /> */}
      <LoginScreens />
    </div>
  );
}

export default App;
