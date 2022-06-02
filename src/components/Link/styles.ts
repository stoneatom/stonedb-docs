import React from 'react';
import styled from 'styled-components';
import {Button} from 'antd';
import ULink from '@docusaurus/Link';

export const LinkStyle = styled(ULink)`
  color: #373C43;
  &:hover{
    color: #00A6FB;
  }
`

export const LinkIconStyle = styled(ULink)`
  height: 50px;
  padding-bottom: 20px;
  line-height: 30px;
  color: #373C43;
  border-bottom: 1px solid #E5E8F0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &:hover{
    color: #00A6FB;
    border-color: #00A6FB;
  }
`

export const LinkBtnStyle = styled(Button)`
  width: 98px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid #00A6FB;
  display: inline-block;
  background-color: #fff;
  line-height: 34px;
  text-align: center;
  padding: 0;
  margin-right: 0;
  margin-left: auto;
  float: right;
`
export const LinkSocialStyle = styled(ULink)`
  margin: 10px;
  height: 100px;
  border-radius: 10px;
  border: 1px solid #00A6FB;
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 22px;
  color: var(--safe-text-color);
  padding: 20px;
  span{
    margin-left: 10px;
  }
  @media (max-width: 996px){
    width: auto;
    margin: 10px 14px;
  }
`