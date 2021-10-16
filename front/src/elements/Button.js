import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    width,
    margin,
    padding,
    borderRadius,
    size,
    color,
    backgroundColor,
    _onClick,
    isFloat,
    children,
    isShadow,
    _onMouseOver,
  } = props;

  const styles = {
    width: width,
    margin: margin,
    padding: padding,
    borderRadius: borderRadius,
    size: size,
    color: color,
    backgroundColor: backgroundColor,
    isFloat: isFloat,
    isShadow: isShadow,
    _onMouseOver: _onMouseOver,
  };

  if (isFloat) {
    return (
      <>
        <FloatButton {...styles} onClick={_onClick}>
          {children}
        </FloatButton>
      </>
    );
  }

  return (
    <>
      {_onMouseOver ? (
        <ElButton {...styles} onClick={_onClick} onMouseOver={_onMouseOver}>
          {children}
        </ElButton>
      ) : (
        <ElButton {...styles} onClick={_onClick}>
          {children}
        </ElButton>
      )}
    </>
  );
};

Button.defaultProps = {
  width: "100px",
  margin: "",
  padding: "5px",
  borderRadius: "50px",
  size: "",
  color: "black",
  backgroundColor: "#90EE90",
  isFloat: "",
  children: null,
  _onClick: () => {},
  isShadow: false,
  _onMouseOver: () => {},
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: none;
  border-radius: ${(props) => props.borderRadius};
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
  ${(props) =>
    props.isShadow
      ? `box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 2px 5px rgba(0, 0, 0, 0.12);`
      : ""}
`;

const FloatButton = styled.button`
  position: ${(props) => props.isFloat};
  right: 30px;
  bottom: 50px;
  width: 50px;
  height: 50px;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: none;
  border-radius: ${(props) => props.borderRadius};
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
  ${(props) =>
    props.isShadow
      ? `box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 2px 5px rgba(0, 0, 0, 0.12);`
      : ""}
`;

export default Button;
