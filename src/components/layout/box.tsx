/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from '@emotion/react';
import StandardCSS from '../../types/standard-css';
import StandardProps from '../../types/standard-props';

const Box = ({
  overrideCss,
  children,
  ...standardProps
}: {
  overrideCss?: SerializedStyles;
  children?: React.ReactNode;
} & StandardProps) => (
  <div
    css={css`
      ${StandardCSS(standardProps)}
      ${overrideCss}
    `}
  >
    {children}
  </div>
);

export default Box;
