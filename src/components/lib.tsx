/*
 * @Author: your name
 * @Date: 2022-01-11 23:50:50
 * @LastEditTime: 2022-01-12 00:00:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /jira/src/components/lib.tsx
 */
import styled from "@emotion/styled";

export const Row = styled.div<{
  gap?: number | boolean,
  between?: boolean,
  marginBottom?: number
}>`
  display: flex;
  align-items: center;
  justify-content: ${props => props.between ? 'space-between' : undefined};
  margin-bottom: ${props=> props.marginBottom + 'rem'}
  > * {
    margin-top: 0!important;
    margin-bottom: 0!important;
    margin-right: ${props => typeof props.gap === 'number' ? props.gap + 'rem' : props.gap ? '2rem' : undefined};
  }
`