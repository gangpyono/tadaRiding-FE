import React from "react";
import styled from "styled-components";

// elements
import { Grid, Text } from "./index";

const Input = (props) => {
  const {
    width,
    height,
    margin,
    padding,
    radius,
    label,
    multiLine,
    type,
    placeholder,
    enterSubmit,
    _onChange,
  } = props;

  const styles = {
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    radius: radius,
  };

  if (multiLine) {
    return (
      <>
        {label && <Text>{label}</Text>}
        <Textarea
          {...styles}
          rows={10}
          label={label}
          placeholder={placeholder}
          enterSubmit={enterSubmit}
          _onChange={_onChange}
        />
      </>
    );
  }

  return (
    <>
      {label && <Text>{label}</Text>}
      <ElInput
        {...styles}
        label={label}
        type={type}
        placeholder={placeholder}
        enterSubmit={enterSubmit}
        _onChange={_onChange}
      />
    </>
  );
};

Input.defaultProps = {
  width: "300px",
  height: "",
  margin: "",
  padding: "",
  radius: "",
  label: "",
  type: "text",
  multiLine: false,
  placeholder: "텍스트를 입력하세요",
  enterSubmit: () => {},
  _onChange: () => {},
};

const ElInput = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: none;
  /* border-bottom: 1px solid gray; */
  border-radius: ${(props) => props.radius};
  :focus {
    outline: none;
    /* border-bottom: 1px solid #cb9b8c; */
  }
`;

const Textarea = styled.textarea`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  line-height: 1.5em;
  box-sizing: border-box;
  border: none;
  /* border-bottom: 1px solid gray; */
  :focus {
    outline: none;
    /* border-bottom: 1px solid #cb9b8c; */
  }
`;
export default Input;
