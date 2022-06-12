import { Col } from 'antd';
import styled from 'styled-components';
import { IconFont } from "../icon";

export const DL = styled.dl`
  border-bottom: 1px solid var(--safe-border-color-base);
  cursor: pointer;
  position: relative;
`

export const DD = styled.dd`
  width: 100%;
  font-size: 14px;
  font-weight: 300;
  line-height: 30px;
  color: var(--safe-text-color-secondary);
  @media (max-width: 996px){
    width: 100%;
  }
`

export const DT = styled.dt`
height: 30px;
font-size: 22px;
font-weight: 400;
line-height: 30px;
.icon{
  margin-right: 10px;
}
`

export const FT = styled(IconFont)`
  position: absolute;
  right: 0;
  top: 10px;
`

export const Item = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;

.icon{
  margin-right: 10px;
}

.more, .ant-image{
  margin-right: 0;
  margin-left: auto;
}
`

export const US = styled(Col)`
padding: 30px;
background: var(--safe-alert-info-bg-color);
border-radius: 10px;
`

export const Link = styled(Col)`
  width: 50%;
  &:nth-child(1){
    padding-right: 20px;
  }
  &:nth-child(2){
    padding-left: 20px;
  }
  @media (max-width: 996px){
    width: 100%;
    &:nth-child(1), &:nth-child(2){
      padding: 0;
    }
  }
`