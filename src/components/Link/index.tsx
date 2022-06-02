import React from 'react';
import { useHistory } from '@docusaurus/router';
import { IconFont } from '../icon';
import {ILink} from './interface';
import {LinkStyle, LinkIconStyle, LinkBtnStyle, LinkSocialStyle} from './styles';

export const Link: React.FC<ILink> = ({to, children}) => (
  <LinkStyle to={to}>
    {children}
  </LinkStyle>
)

export const LinkIcon: React.FC<ILink> = ({to, children}) => {
  return (
    <LinkIconStyle to={to}>
      {children as string}
      <IconFont type="icon-a-bianzu301" />
    </LinkIconStyle>
  )
}

export const LinkBtn: React.FC<ILink> = ({to, children}) => {
  const history = useHistory();
  const linkTo = () => {
    to && history.push(to);
  }
  return (
    <LinkBtnStyle onClick={linkTo}>
      {children as string}
      <IconFont type="icon-a-bianzu301" />
    </LinkBtnStyle>
  );
}

export const LinkSocial: React.FC<ILink> = ({to, icon, children}) => (
  <LinkSocialStyle to="#">
    <IconFont type={icon} />
    <span>{children}</span>
    <IconFont type="icon-a-bianzu301" />
  </LinkSocialStyle>
)