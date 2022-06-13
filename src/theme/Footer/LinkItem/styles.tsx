import styled from 'styled-components';
import ULink from '@docusaurus/Link';

export const LinkItemStyle = styled.div`
  margin: 0 5px;
  display: inline-block;
`

export const Link = styled(ULink)`
  font-size: 30px;
  color: var(--safe-text-color-secondary-dark);
  &:hover{
    color: var(--safe-text-color-dark);
  }
`;

