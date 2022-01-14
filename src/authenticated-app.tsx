/*
 * @Author: your name
 * @Date: 2022-01-06 08:32:03
 * @LastEditTime: 2022-01-12 14:32:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /jira/src/authenticated-app.tsx
 */
import styled from "@emotion/styled";
import React from "react"
import { Row } from "./components/lib";
import { useAuth } from "./context/auth-context"
import { ProjectList } from './screens/project-list'
import logo from './assets/logo.png'
import { Dropdown, Menu } from "antd";

export const AuthenticatedApp = ()=> {
  const { logout, user } = useAuth();
  return <Container>
    <Header>
      <HeaderLeft gap={2} >
        <img src={logo} alt="" style={{width: '4rem'}}/>
        <HeaderItem>项目</HeaderItem>
        <HeaderItem>用户</HeaderItem>
      </HeaderLeft>
      <HeaderRight>
        <Dropdown overlay={
          <Menu>
            <Menu.Item key={'logout'}>
              <a onMouseEnter={logout} href="/#">登出</a>
            </Menu.Item>
          </Menu>
        }>
          <a onClick={e=> e.preventDefault()} href="/#">Hi, {user?.name}</a>
        </Dropdown>
      </HeaderRight>
    </Header>
    <Main>
      <ProjectList/>
    </Main>
  </Container>
}

const HeaderItem = styled.h3`
  margin-right: 3rem;
`

const Container = styled.div`
  height: 100vh;
  grid-gap: 10rem;
`

// grid-area 用来给grid子元素起名字
const Header = styled(Row)`
  justify-content: space-between;
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.1);
`

const HeaderLeft = styled(Row)``;

const HeaderRight = styled.div``;

const Main = styled.main`
  grid-area: main;
`