import React from 'react';
import { Button, Divider } from "antd";
import {ISocial} from './interface';

function tranNumber(num: number, point: number){
  // 将数字转换为字符串,然后通过split方法用.分隔,取到第0个
  let numStr = num.toString().split('.')[0]
  if(numStr.length<6) { // 判断数字有多长,如果小于6,,表示10万以内的数字,让其直接显示
      console.log(numStr);
      return numStr;
    }else if(numStr.length>=6 && numStr.length<=8){ // 如果数字大于6位,小于8位,让其数字后面加单位万
       let decimal = numStr.substring(numStr.length-4, numStr.length-4+point)
       console.log(decimal);
       // 由千位,百位组成的一个数字
       return parseFloat(parseInt((num / 10000) as unknown as string)+'.'+decimal)+'W'  
  }else if(numStr.length >8){ // 如果数字大于8位,让其数字后面加单位亿
       let decimal = numStr.substring(numStr.length-8, numStr.length-8+point);
       console.log(decimal);
       return parseFloat(parseInt((num / 100000000) as unknown as string)+'.'+decimal)+'亿'
  }
}

function formatNumber(num: number, unit = 'K') {
  let numStr = '';
  if(num < 1000) {
    numStr = String(num);
  } else {
    numStr = `${(num / 1000).toFixed(2)}${unit}`
  }
  return numStr
}

export const Social: React.FC<ISocial> = ({title, value, children}) => {
  return (
    <>
      {
        value ? (
          <Button>
            {children}
            <span>{title}</span>
            <Divider type="vertical" />
            <b>{formatNumber(parseInt(value))}</b>
          </Button>
        ) : null
      }
    </>
  )
}
