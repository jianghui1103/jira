/*
 * @Author: your name
 * @Date: 2021-12-29 23:43:27
 * @LastEditTime: 2022-01-06 00:01:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /jira/src/index.tsx
 */

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { AppProviders } from './context/index'

ReactDOM.render(
  <React.StrictMode>
    <AppProviders >
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root')
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
