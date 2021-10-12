import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { size, bold, color, align, children } = props;
  const styles = {
    size: size,
    bold: bold,
    color: color,
    align: align,
  };
  return (
    <React.Fragment>
      <ElText {...styles}>{children}</ElText>
    </React.Fragment>
  );
};

Text.defaultProps = {
  children: null,
  size: "20px",
  bold: false,
  color: "#000000",
  margin: "0",
};

const ElText = styled.div`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  ${(props) => (props.bold ? "700" : "400")};
  text-align: ${(props) => props.align};
  margin: ${(props) => props.margin};
`;
export default Text;
