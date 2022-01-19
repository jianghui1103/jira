/*
 * @Author: your name
 * @Date: 2022-01-19 12:36:07
 * @LastEditTime: 2022-01-19 12:46:56
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /jira/src/components/error-boundary.tsx
 */
import React, { ReactNode } from "react";

type FallbackRender = (props: {error: Error | null})=> React.ReactElement;

export class ErrorBoundary extends React.Component<React.PropsWithChildren<{fallbackRender: FallbackRender}>, { error: Error | null}> {
  state= {error: null};

  static getDerivedStateFromError(error: Error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }
  render() {
    const {error} = this.state;
    const {fallbackRender, children} = this.props
    if (error) {
      // 你可以自定义降级后的 UI 并渲染
      return fallbackRender({error});
    }
    return children; 
  }
}