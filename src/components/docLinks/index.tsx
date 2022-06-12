import React, { useEffect, useState } from 'react';
import {unified} from 'unified';
import remarkParse from 'remark-parse';
import { v4 as uuidv4 } from 'uuid';
import {pickWhen} from '@site/src/utils';
import MDXA from '@site/src/theme/MDXComponents/A';
import {Row, Col} from './styles';

const DocLinks: React.FC<any> = ({children}) => {
  const [list, setList] = useState(null);
  function init() {
    const node = unified().use(remarkParse).parse(children);
    console.log('node', node)
    const list = pickWhen('list', (acc, cur) => {
      const children = pickWhen('listItem', (acc, cur) => {
        let children = [];
        const ps = cur.children.filter(({type}) => type === 'paragraph');
        const lists = cur.children.filter(({type}) => type === 'list');
        if(ps?.length === lists?.length && lists?.length === 1) {
          const current = ps[0]?.children[0];
          children.push({
            ...current,
            text: current.children[0].value,
            children: pickWhen('paragraph', (acc, cur) => {
              return acc.concat(cur.children)
            }, lists)
          });
        } else {
          children = pickWhen('paragraph', (acc, cur) => {
            const {url, children, title} = cur.children[0];
            acc.push({
              title,
              url,
              text: children[0].value
            });
            return acc;
          }, cur.children);
        }
        return acc.concat(children);
      }, cur.children);
      return acc.concat(children);
    }, [node]);
    console.log('list', list)
    setList(list)
  }
  
  useEffect(() => {
    init();
  }, []);

  

  return (
    <Row>
      {
        list && list.length && list.map(({children, text, url, title}) => {
          return (
            <Col key={uuidv4()}>
              <MDXA to={url} title={title}>{text}</MDXA>
              <Row>
                {
                  children && children.length && children.map(({children, url, title}) => {
                    return (
                      <Col key={uuidv4()}>
                        <MDXA  to={url} title={title}>{children[0].value}</MDXA>
                      </Col>
                    )
                  })
                }
              </Row>
            </Col>
          )
        })
      }
    </Row>
  );
};
export default DocLinks;