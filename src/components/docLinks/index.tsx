import React, { useEffect, useState } from 'react';
import unified from 'unified';
import remarkParse from 'remark-parse';
import {reduce} from 'ramda';
import { v4 as uuidv4 } from 'uuid';
import {pickWhen} from '@site/src/utils';
import MDXA from '@site/src/theme/MDXComponents/A';
import {Row, Col} from './styles';

const DocLinks: React.FC<any> = ({children}) => {
  const [list, setList] = useState(null);
  function init() {
    const node = unified().use(remarkParse).parse(children);
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
          children = cur.children;
        }
        return acc.concat(children);
      }, cur.children);
      return acc.concat(children);
    }, [node]);
    setList(node)
  }
  
  useEffect(() => {
    init();
  }, [])
  

  return (
    <Row>
      {
        list && list.length && list.map(({children, text, url, title}) => {
          return (
            <Col>
              <MDXA key={uuidv4()} to={url} title={title}>{text}</MDXA>
              <Row>
                {
                  children && children.length && children.map(({children, url, title}) => {
                    return (
                      <Col>
                        <MDXA key={uuidv4()} to={url} title={title}>{children[0].value}</MDXA>
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