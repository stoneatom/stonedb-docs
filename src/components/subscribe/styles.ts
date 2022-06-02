 import styled from "styled-components";
 import {Space} from 'antd';
 import {SubscribeMail} from '../subscribeMail'
 import {DocContext} from '../styles';

 export const SubscribeStyle = styled.div.attrs((props) => {
  const left = 0;
  const width = document.body.clientWidth;
  
  return {
    width
  }
 })`
  --ifm-body-width: ${props => props.width}px;
  --ifm-container-right-body: calc(${props => props.width} - var(--ifm-container-width));
  width: var( --ifm-body-width );
  height: 400px;
  background-image: url(https://static.stoneatom.com/assets/rc-upload-1652691483537-2_subscribeBg.png);
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 100% 100%;
  margin: 60px auto;
  margin-left: -12%;
  @media (max-width: 996px){
    width: 100%;
    margin-left: 0;
    background-image: none;
    height: auto;
  }
 `

export const Message = styled(SubscribeMail.Message)`
  color: #fff;
  .br {
    border-color: #fff;
    min-width: 30px;
    max-width: 30px;
  }
  @media (max-width: 996px){
    background-color: #00A6FB;
    padding: var(--ifm-spacing-horizontal);
  }
`

export const FormStyle = styled(SubscribeMail.Form)`
  width: 300px;
  height: 300px;
  background: #FFFFFF;
  box-shadow: 0px 30px 50px 0px rgba(55, 60, 67, 0.2);
  border-radius: 10px;
  padding: 20px;
  .ant-btn{
    width: 100%;
  }
`

export const TipStyle = styled(SubscribeMail.Tip)`
  width: 300px;
  height: 300px;
  background: #FFFFFF;
  box-shadow: 0px 30px 50px 0px rgba(55, 60, 67, 0.2);
  border-radius: 10px;
  padding: 20px;
  .ant-btn{
    width: 100%;
  }
  @media (max-width: 996px){
    width: 92%;
    height: auto;
    flex: 1;
    margin-top: -20px;
    margin-bottom: 20px;
    margin-left: var(--ifm-spacing-horizontal);
    margin-right: var(--ifm-spacing-horizontal);
  }
`

export const Doc = styled(DocContext)`
  height: 100%;
  margin-right: -12%;
  @media (max-width: 996px){
    margin-right: 0;
  }
`
export const Mail = styled.div`
  height: 100%;
  width: 100%;
  > div:first-child {
    width: 60%;
  }
  @media (max-width: 996px){
    > div:first-child {
      width: 100%;
      
    }
  }
`
