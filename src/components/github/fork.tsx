import React from 'react';
import {ForkOutlined} from '@ant-design/icons';
import useGlobalData from '@docusaurus/useGlobalData';
import {Social} from '../social';

export const Fork: React.FC = () => {
  const data: any = useGlobalData();
  const {repo: {forks_count}} = data["fetch-repo"].default;
  return (
    <Social title="Fork" value={forks_count}>
      <ForkOutlined />
    </Social>
  );
}
