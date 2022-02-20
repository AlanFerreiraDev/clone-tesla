import { CarModel } from '../ModelsContext';

export interface ModelOverlayProps {
  model: CarModel;
}

// Vou pegar os dados de offsetTop e offsetHeight do scroll como TS
export type SectionDimensions = Pick<
  HTMLDivElement,
  'offsetTop' | 'offsetHeight'
>;
