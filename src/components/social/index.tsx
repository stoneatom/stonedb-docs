import React from 'react';
import { Button, Divider } from "antd";
import {ISocial} from './interface';

// const format = (value: number) => {
//   if(value <= 999) {
//     return value
//   } else {
//     const num = value.toFixed(1)
//     const nums = num.split('.');
//     const negative = value < 0 ? "-" : "";
//     if(nums[0].length <= 3) {
//       return `${negative}${num}K`
//     } else if(nums[0].length ) {

//     }
//     return `${negative}`
//   }
// }

export const Social: React.FC<ISocial> = ({title, value, children}) => {
  return (
    <Button>
      {children}
      <span>{title}</span>
      <Divider type="vertical" />
      <b>{value}</b>
    </Button>
  )
}
