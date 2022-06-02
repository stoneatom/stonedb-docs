import React from 'react';
import { Space } from 'antd';
import {Fork} from './fork';
import {Star} from './star';


export class Github extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }

  static Fork() {
    return (
      <Fork />
    )
  }

  static Star() {
    return (
      <Star />
    )
  }

  render() {
    return (
      <Space className={this.props.className}>
        {this.props.children}
      </Space>
    );
  }
}