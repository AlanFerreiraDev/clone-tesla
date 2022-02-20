import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  // Aqui basicamente perguntamos qual a forma que o Pai vai fazer o align do Section
  scroll-snap-align: start; // Ele passa no inicio da pagina, ou seja, o comportamento é sempre ir p inicio da próxima page
`;
