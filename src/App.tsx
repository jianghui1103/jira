/*
 * @Author: your name
 * @Date: 2021-12-29 23:43:27
 * @LastEditTime: 2022-01-19 12:48:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /jira/src/App.tsx
 */
import React from 'react';
import './App.css';
import { AuthenticatedApp } from './authenticated-app';
// import { ProjectList } from './screens/project-list'
import { useAuth } from './context/auth-context'
import { UnauthenticatedApp } from './unauthenticated-app';
import { ErrorBoundary } from './components/error-boundary';
import { FullPageErrorFallBack } from './components/lib';

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageErrorFallBack}>
        {user? <AuthenticatedApp/> : <UnauthenticatedApp/>}
      </ErrorBoundary>
    </div>
  );
}

export default App;
