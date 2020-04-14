import React from "react";
import avatar from "../avatar.jpg";
import styled from 'styled-components';

const CustomAvatar = styled.img`
  height: 15rem;
  position: relative;
  vertical-align: middle;
  border-radius: 50%;
  display: block;
  top: -7.5rem;
  width: 15rem;
  border: 0.25rem solid #fafafa;
  margin: 0 auto -7.5rem auto;
  
`;

const StyledAvatar = () => <CustomAvatar src={avatar}/>

export default StyledAvatar;

