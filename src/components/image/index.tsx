import React from 'react';
import {IImage} from './interface';
import {ImageStyle, Title, Mask} from './styles';

export const Image: React.FC<IImage> = ({src, children, className, alt}) => {
  return (
    <ImageStyle src={src} className={className} loading="lazy" alt={alt}>
      <Title>{children}</Title>
      <Mask className='mask' />
    </ImageStyle>
  )
}