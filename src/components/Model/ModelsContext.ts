import React, { ReactNode } from 'react';

export interface CarModel {
  modelName: string;
  overlayNode: ReactNode;
  sectionRef: React.RefObject<HTMLDivElement>; // Referencia guardada de cada elemento do map de carros da Page
}

interface ModelsContext {
  wrapperRef: React.RefObject<HTMLElement>; // Será uma referencia de um elemento HTML
  registeredModels: CarModel[];
  registerModel: (model: CarModel) => void; // Função q só registra o carro e não retorna nada, por isso é void
  unregisterModel: (modelName: string) => void; // Função q só remove o carro e não retorna nada, por isso é void, pego o modelo do carro
  getModelByName: (modelName: string) => CarModel | undefined; // Função q retorna o carro, se não existir retorna undefined
}

export default React.createContext<ModelsContext>({} as ModelsContext);
