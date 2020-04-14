import React from "react";
import background from "../background.jpg";
import styled from "styled-components";

const ImageBackground = styled.div`
  width: 100%;
  height: 300px;

  background-image: url(${background});
  background-attachment: fixed;
  background-position: center;

  filter: blur(8px);

  background-repeat: no-repeat;
  background-size: cover;
`;


const WideBackground = () => <ImageBackground/>;

export default WideBackground;
