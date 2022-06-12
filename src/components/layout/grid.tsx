/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from '@emotion/react';
import StandardCSS from '../../types/standard-css';
import StandardProps from '../../types/standard-props';

const Grid = ({
  gridTemplateColumns,
  gridTemplateRows,
  gridColumnGap,
  gridRowGap,
  overrideCss,
  children,
  ...standardProps
}: {
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gridColumnGap?: string;
  gridRowGap?: string;
  overrideCss?: SerializedStyles;
  children?: React.ReactNode;
} & StandardProps) => (
  <div
    css={css`
      -webkit-display: grid;
      display: grid;
      grid-template-columns: ${gridTemplateColumns};
      grid-template-rows: ${gridTemplateRows};
      grid-column-gap: ${gridColumnGap};
      grid-row-gap: ${gridRowGap};
      ${StandardCSS(standardProps)}
      ${overrideCss}
    `}
  >
    {children}
  </div>
);

export default Grid;
