import styled from '@emotion/styled';

export const Image = styled.div`
  animation: rotate_image 0.4s linear infinite;
  transform-origin: 50% 50%;
  perspective: 30px;

  @keyframes rotate_image {
    100% {
      transform: rotateY(360deg);
    }
  }
`;
