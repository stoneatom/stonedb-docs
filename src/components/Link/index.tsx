import React from 'react';
import { useHistory } from '@docusaurus/router';
import { IconFont } from '../icon';
import {ILink} from './interface';
import {LinkStyle, LinkIconStyle, LinkBtnStyle, LinkSocialStyle} from './styles';

const linkTo = (to: string) => {
  const history = useHistory();
  if(!to) {
    return false;
  }
  if(to.indexOf('://') >= 0) {
    window.open(to, 'blank')
  } else {
    history.push(to);
  }
}

const checkInterLink = (to: string) => {
  return to ? to.indexOf('://') < 0 : true
}

export const Link: React.FC<ILink> = ({to, children, className}) => {
  const isInterLink = checkInterLink(to);
  let options = isInterLink ? {
    onClick: () => linkTo(to)
  } : {
    href: to,
    target:"_blank"
  }
  return (
    <LinkStyle 
      {...options}
      className={className}
    >
      {children}
    </LinkStyle>
  )
}

export const LinkIcon: React.FC<ILink> = ({to, children, className}) => {
  const isInterLink = checkInterLink(to);
  let options = isInterLink ? {
    onClick: () => linkTo(to)
  } : {
    href: to,
    target:"_blank"
  }
  return (
    <LinkIconStyle 
      {...options}  
      className={className}
    >
      {children as string}
      <IconFont type="icon-a-bianzu301" />
    </LinkIconStyle>
  )
}

export const LinkBtn: React.FC<ILink> = ({to, children}) => {
  return (
    <LinkBtnStyle onClick={() => linkTo(to)}>
      {children as string}
      <IconFont type="icon-a-bianzu301" />
    </LinkBtnStyle>
  );
}

export const LinkSocial: React.FC<ILink> = ({to, icon, children, className}) => {
  const isInterLink = checkInterLink(to);
  let options = isInterLink ? {
      onClick: () => linkTo(to)
    } : {
      href: to,
      target:"_blank"
    }
  return (
    <LinkSocialStyle 
      {...options} 
      className={className}
    >
      <IconFont type={icon} />
      <span>{children}</span>
      <IconFont type="icon-a-bianzu301" />
    </LinkSocialStyle>
  )
}