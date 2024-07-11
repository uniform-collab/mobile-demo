import { TextStyle, ViewStyle } from 'react-native';
import { CallToActionVariant } from './';

export const getCallToActionContentStyle = (variantId?: string): ViewStyle => {
  switch (variantId) {
    case CallToActionVariant.AlignLeft:
      return {
        alignItems: 'flex-start',
      };
    case CallToActionVariant.AlignRight:
      return {
        alignItems: 'flex-end',
      };
    case CallToActionVariant.Featured:
      return {
        alignItems: 'flex-start',
      };
    default:
      return {
        alignItems: 'center',
      };
  }
};

export const getCallToActionButtonsStyle = (variantId?: string): ViewStyle => {
  switch (variantId) {
    case CallToActionVariant.AlignLeft:
      return {
        justifyContent: 'flex-start',
      };
    case CallToActionVariant.AlignRight:
      return {
        justifyContent: 'flex-end',
      };
    case CallToActionVariant.Featured:
      return {
        justifyContent: 'space-between',
      };
    default:
      return {
        justifyContent: 'center',
      };
  }
};

export const getCallToActionTextStyle = (variantId?: string): TextStyle => {
  switch (variantId) {
    case CallToActionVariant.AlignLeft:
      return {
        textAlign: 'left',
      };
    case CallToActionVariant.AlignRight:
      return {
        textAlign: 'right',
      };
    case CallToActionVariant.Featured:
      return {
        textAlign: 'left',
      };
    default:
      return {
        textAlign: 'center',
      };
  }
};

export const getCallToActionTextWrappersStyle = (variantId?: string) => {
  switch (variantId) {
    case CallToActionVariant.Featured:
      return 'w-4/5';
    default:
      return '';
  }
};
