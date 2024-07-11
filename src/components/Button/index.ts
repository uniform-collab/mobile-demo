export type ButtonProps = {
  href?: string;
  copy?: string;
  style: Types.ButtonStyles;
  className?: string;
  onPress?: () => void;
  disable?: boolean;
};

export { Button as default } from './Button';
