import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const {
    size,
    bold,
    color,
    align,
    margin,
    children,
    width,
    bg,
    padding,
    borderRadius,
    _onChange,
    _onClick,
    cursor,
  } = props;

  const styles = {
    size: size,
    bold: bold,
    color: color,
    align: align,
    margin: margin,
    width: width,
    bg: bg,
    padding: padding,
    borderRadius: borderRadius,
    cursor: cursor,
  };

  return (
    <React.Fragment>
      <ElText onClick={_onClick} onChange={_onChange} {...styles}>
        {children}
      </ElText>
    </React.Fragment>
  );
};

Text.defaultProps = {
  children: null,
  size: "20px",
  bold: false,
  color: "#000000",
  margin: "0",
  width: "",
  bg: false,
  padding: false,
  borderRadius: false,
  _onChange: () => {},
  _onClick: () => {},
  cursor: false,
};

const ElText = styled.div`
  width: ${(props) => props.width};
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  text-align: ${(props) => props.align};
  margin: ${(props) => props.margin};
  ${(props) => (props.bg ? `background-color : ${props.bg}` : "")};
  ${(props) => (props.padding ? `padding : ${props.padding}; ` : "")};
  ${(props) =>
    props.borderRadius ? `border-radius : ${props.borderRadius};` : ""};
  ${(props) => (props.cursor ? `cursor:pointer` : "")}
`;
export default Text;
