import React, { useCallback, useLayoutEffect, useState } from 'react';
import { useTransform } from 'framer-motion';

import useWrapperScroll from '../useWrapperScroll';

import { Container } from './styles';

import { ModelOverlayProps, SectionDimensions } from './interfaces';

const ModelOverlay: React.FC<ModelOverlayProps> = ({ model, children }) => {
  // função que vai retornar os dados p dentro do estado
  const getSectionDimensions = useCallback(() => {
    return {
      offsetTop: model.sectionRef.current?.offsetTop,
      offsetHeight: model.sectionRef.current?.offsetHeight,
    } as SectionDimensions;
  }, [model.sectionRef]);

  const [dimensions, setDimensions] = useState<SectionDimensions>(
    getSectionDimensions()
  );

  // Disparado com base no layout, toda vez após uma mutação na dom
  useLayoutEffect(() => {
    function onResize() {
      const data = getSectionDimensions();
      console.log(data);
      // Pedir para o navegador montar um quadro de animação
      // E toda vez q a tel amudar ele seta a função q recebe o tamanho da tela
      window.requestAnimationFrame(() => setDimensions(data));
    }

    window.addEventListener('resize', onResize); // função que gerencia o resize da tela

    return () => window.removeEventListener('resize', onResize); // função de limpeza
  }, []);

  const { scrollY } = useWrapperScroll();

  const sectionScrollProgress = useTransform(
    scrollY,
    (y) => (y - dimensions.offsetTop) / dimensions.offsetHeight // Valor que calcula o progresso do scroll em y
  );

  // Para aprecer no console, o valor do scrollY, vemo sno onCHange dele
  // useEffect(() => {
  //   sectionScrollProgress.onChange((value) =>
  //     console.log({ sectionScrollProgress: value })
  //   );
  // }, [sectionScrollProgress]);

  const opacity = useTransform(
    sectionScrollProgress,
    [-0.42, -0.05, 0.05, 0.42], // -.42 e -.05 são os valores de inicio, .05 e .42 são os onverso e valores de saida da opacity
    [0, 1, 1, 0] // 0 e 1 são os valores de netrada , e 1 e 0, inverso são a sapida do efeito de opacity
  ); // Pego o valor do scrollY, o valor de -.42 até -.05 da posição, e o valor da opacidade de 0 a 1

  // estamos empre com o MOdel Seven na frente de todos, por isso criamos um novo efeito de useTransfrom
  const pointerEvents = useTransform(opacity, (value) =>
    // procurar mais sobre pointer-events, propriedade css
    value > 0 ? 'auto' : 'none'
  );

  return <Container style={{ opacity, pointerEvents }}>{children}</Container>;
};

export default ModelOverlay;
