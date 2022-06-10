import React from 'react';
import {Fork} from './fork';
import {Star} from './star';
import {LinkIcon} from '../Link';
import GithubStyle from './styles';

export class Github extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }

  hasChildren() {
    return this.props.children.filter(({props}) => props.children).length > 0
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
      <GithubStyle className={this.props.className}>
        {this.props.children}
        {this.hasChildren() ? null : (
          <LinkIcon className='link' to="https://github.com/stoneatom/stonedb">Github</LinkIcon>
        )}
      </GithubStyle>
    );
  }
}