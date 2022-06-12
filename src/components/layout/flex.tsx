/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from '@emotion/react';
import StandardCSS from '../../types/standard-css';
import StandardProps from '../../types/standard-props';

const Flex = ({
  flexDirection,
  justifyContent,
  flexWrap,
  overrideCss,
  children,
  ...standardProps
}: {
  flexDirection?: 'row' | 'column';
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-evenly';
  flexWrap?: 'wrap' | 'nowrap';
  overrideCss?: SerializedStyles;
  children?: React.ReactNode;
} & StandardProps) => (
  <div
    css={css`
      ${StandardCSS(standardProps)}
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      flex-direction: ${flexDirection};
      flex-wrap: ${flexWrap};
      justify-content: ${justifyContent};
      ${overrideCss}
    `}
  >
    {children}
  </div>
);

export default Flex;
