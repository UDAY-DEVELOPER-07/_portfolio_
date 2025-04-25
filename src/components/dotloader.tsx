'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';

const bounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 20px; }
  100% { margin-bottom: 0; }
`;
interface DotProps {
  $delay: string;
}

const Dot = styled.div<DotProps>`
  background-color: #FFF7E5;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 2px 5px;
  animation: ${bounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.$delay};
`;

const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const LoadingDots: React.FC = () => {
  return (

    <DotWrapper>
      <Dot $delay="0s" />
      <Dot $delay=".1s" />
      <Dot $delay=".2s" />
    </DotWrapper>


  );
};

export default LoadingDots;
