/*
 * @Author: your name
 * @Date: 2022-01-06 08:32:03
 * @LastEditTime: 2022-01-11 23:59:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /jira/src/authenticated-app.tsx
 */
import styled from "@emotion/styled";
import React from "react"
import { Row } from "./components/lib";
import { useAuth } from "./context/auth-context"
import { ProjectList } from './screens/project-list'

export const AuthenticatedApp = ()=> {
  const { logout } = useAuth();
  return <Container>
    <Header>
      <HeaderLeft gap={2} >
        <h2>logo</h2>
        <h2>项目</h2>
        <h2>用户</h2>
      </HeaderLeft>
      <HeaderRight>
        <button onClick={logout}>登出</button>
      </HeaderRight>
    </Header>
    <Nav>nav</Nav>
    <Main>
      <ProjectList/>
    </Main>
    <Aside>aside</Aside>
    <Footer>footer</Footer>
  </Container>
}

const HeaderItem = styled.h3`
  margin-right: 3rem;
`

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr auto;
  grid-template-columns: 20rem 1fr 20rem;
  grid-template-areas: 
  "header header header"
  "nav main aside"
  "footer footer footer"
  ;
  height: 100vh;
  grid-gap: 10rem;
`

// grid-area 用来给grid子元素起名字
const Header = styled(Row)`
  grid-area: header;
  justify-content: space-between;
`

const HeaderLeft = styled(Row)``;

const HeaderRight = styled.div``;


const Main = styled.main`
  grid-area: main;
`
const Nav = styled.nav`
  grid-area: nav;
`

const Aside = styled.aside`
  grid-area: aside;
`

const Footer = styled.footer`
  grid-area: footer;
`
