import React from 'react';
import {GithubOutlined} from '@ant-design/icons';
import useGlobalData from '@docusaurus/useGlobalData';
import {Social} from '../social';

export const Star: React.FC = () => {
  const data: any = useGlobalData();
  const {repo: {stargazers_count}} = data["fetch-repo"].default;
  return (
    <Social title="Star" value={stargazers_count}>
      <GithubOutlined />
    </Social>
  );
}
