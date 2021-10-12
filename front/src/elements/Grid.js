import React, { Children } from 'react';
import styled from 'styled-components';
const Grid = (props) => {
  const {
    children,
    width,
    height,
    padding,
    margin,
    bg,
    center,
    isFlex,
    borderRadius,
    border,
  } = props;

  const styles = {
    width,
    height,
    padding,
    margin,
    bg,
    center,
    isFlex,
    borderRadius,
    border,
  };

  return (
    <>
      <GridBox {...styles}>{children}</GridBox>
    </>
  );
};

Grid.defaultProps = {
  children: null,
  width: false,
  height: false,
  padding: false,
  margin: false,
  bg: false,
  center: false,
  isFlex: false,
  borderRadius: false,
  border: false,
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-sizing: border-box;
  ${(props) => (props.padding ? ` padding : ${props.padding}; ` : '')};
  ${(props) => (props.margin ? ` margin : ${props.margin}; ` : '')};
  ${(props) => (props.bg ? `background-color : ${props.bg}` : '')};
  ${(props) =>
    props.isFlex
      ? `display : flex; align-items : center ; justify-content : space-between;`
      : ''};

  ${(props) => (props.center ? `text-align: center;` : '')}
  ${(props) => (props.borderRadius ? `border-radius : ${props.borderRadius};` : '')};
  ${(props) => (props.border ? `border : ${props.border};` : '')};
`;

export default Grid;
