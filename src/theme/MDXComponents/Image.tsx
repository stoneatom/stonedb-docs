import React from 'react';
import {Image, OmitText} from '@site/src/components'

export default function MDXImage({className, alt, src, title, ...props}: any): JSX.Element {
    return (
    <Image src={src} className={className} alt={alt}>
        <OmitText size={20}>{title}</OmitText>
    </Image>
  )
}
