import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  scroll-snap-type: y mandatory; // Procurar mais sobre ...
  overflow-y: scroll; // regra p não quebrar enquanto a gente scrola p baixo
`;

export const OverlaysRoot = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
