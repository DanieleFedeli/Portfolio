import React from "react";
import styled  from "styled-components";

const PaddedDiv = styled.div`
  padding: 0 15%;
  text-align: center;
`;

const Canvas = (props) => <PaddedDiv>{props.children}</PaddedDiv>;

export default Canvas;
