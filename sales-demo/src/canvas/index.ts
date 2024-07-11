import { heroMappings } from './Hero';
import { callToActionMappings } from './CallToAction';
import { cardBlockMappings } from './CardBlock';
import { cardMappings } from './Card';
import { containerMappings } from './_containers/Container';
import { UnknownComponent } from './UnknownComponent/UnknownComponent';

const componentList: Record<string, any> = {
  ...heroMappings,
  ...callToActionMappings,
  ...cardBlockMappings,
  ...cardMappings,
  ...containerMappings,
};

export const resolveRenderer = ({ type }: any) => {
  return componentList[type] ? componentList[type] : UnknownComponent;
};
