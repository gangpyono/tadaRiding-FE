<<<<<<< HEAD
import React from 'react';
import styled from 'styled-components';
=======
import React from "react";
import styled from "styled-components";

>>>>>>> develop
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
<<<<<<< HEAD
    //수정사항
    flexBasis,
    wrap,
=======
    isShadow,
>>>>>>> develop
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
<<<<<<< HEAD
    //수정사항
    flexBasis,
    wrap,
=======
    isShadow,
>>>>>>> develop
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
<<<<<<< HEAD
  //수정사항
  wrap: false,
  flexBasis: false,
=======
  isShadow: false,
>>>>>>> develop
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding : ${props.padding}; ` : "")};
  ${(props) => (props.margin ? `margin : ${props.margin}; ` : "")};
  ${(props) => (props.bg ? `background-color : ${props.bg}` : "")};
  ${(props) =>
    props.isFlex
      ? `display : flex; align-items : center ; justify-content : space-between;`
      : ""};

<<<<<<< HEAD
  ${(props) => (props.center ? `text-align: center;` : '')}
  ${(props) => (props.borderRadius ? `border-radius : ${props.borderRadius};` : '')};
  ${(props) => (props.border ? `border : ${props.border};` : '')};
  // 수정사항
  ${(props) => (props.wrap ? `flex-wrap : wrap` : '')};
  ${(props) => (props.flexBasis ? `flex-basis : ${props.flexBasis} ` : '')};
=======
  ${(props) => (props.center ? `text-align: center;` : "")}
  ${(props) =>
    props.borderRadius ? `border-radius : ${props.borderRadius};` : ""};
  ${(props) => (props.border ? `border : ${props.border};` : "")};
  ${(props) =>
    props.isShadow
      ? `box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 2px 5px rgba(0, 0, 0, 0.12);`
      : ""};
>>>>>>> develop
`;

export default Grid;
