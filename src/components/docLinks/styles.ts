 import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow: hidden;
  position: relative;
  margin: 10px -20px;
`

export const Col = styled.div`
  width: 50%;
  padding: 0 20px;
  padding-left: 30px;
  overflow: hidden;
  display: block;
  a {
    width: 100%;
    line-height: auto;
    align-items: center;
    height: auto;
    min-height: 50px;
    flex: 1;
    width: 100%;
  }
`