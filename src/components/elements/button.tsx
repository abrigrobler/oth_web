/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from '@emotion/react';
import theme from '../../theme';
import StandardCSS from '../../types/standard-css';
import StandardProps from '../../types/standard-props';

enum ButtonVariantEnum {
  BASIC = 'basic',
  FILLED = 'filled',
  OUTLINED = 'outlined',
}

type ButtonVariants = 'basic' | 'filled' | 'outlined';

const Button = ({
  variant = ButtonVariantEnum.BASIC,
  onClick,
  children,
  overrideCss,
  ...standardProps
}: {
  variant?: ButtonVariants;
  onClick?: () => void;
  children?: React.ReactNode | string;
  overrideCss?: SerializedStyles;
} & StandardProps) => (
  <button
    onClick={onClick}
    css={css`
      ${StandardCSS(standardProps)}
      border: none;
      background-color: none;
      background: none;
      cursor: pointer;

      ${variant === ButtonVariantEnum.FILLED &&
      css`
        background-color: ${theme.colors.orange};
        color: ${theme.colors.mainBackground};
      `}
      ${variant === ButtonVariantEnum.OUTLINED &&
      css`
        border: 1px solid ${theme.colors.orange};
      `}

      ${overrideCss}
    `}
  >
    {children}
  </button>
);

export default Button;
