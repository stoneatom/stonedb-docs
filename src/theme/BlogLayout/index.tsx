import React from 'react';
import Layout from '@theme/Layout';
import type {Props} from '@theme/BlogLayout';
import {Nav, Container} from './styles';

export default function BlogLayout(props: Props): JSX.Element {
  const {sidebar, toc, children, ...layoutProps} = props;

  return (
    <Layout {...layoutProps}>
      <Container className="container margin-vert--lg">
        <main
          itemScope
          itemType="http://schema.org/Blog">
          {children}
        </main>
        {toc && <Nav>{toc}</Nav>}
      </Container>
    </Layout>
  );
}
