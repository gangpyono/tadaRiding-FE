import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { size, src, _onClick, cursor } = props;
  const styles = {
    size: size,
    src: src,
    _onClick: _onClick,
    cursor: cursor,
  };
  return (
    <React.Fragment>
      <ImageOutter>
        <ImageInner {...styles} onClick={_onClick}></ImageInner>
      </ImageOutter>
    </React.Fragment>
  );
};

Image.defaultProps = {
  src: "https://aomori-cycling.com/kr/wp-content/themes/cycling/images/basi_img-road.jpg",
  size: 200,
  _onClick: () => {},
  cursor: false,
};

const ImageOutter = styled.div`
  width: 100%;
  /* min-width: 250px; */
`;
const ImageInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  ${(props) => (props.cursor ? `cursor: pointer;` : "")};
`;
export default Image;
