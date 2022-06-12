/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from '@emotion/react';
import StandardCSS from '../../types/standard-css';
import StandardProps from '../../types/standard-props';

const Image = ({
  source,
  alt,
  overrideCss,
  ...standardProps
}: {
  source: string;
  alt: string;
  overrideCss?: SerializedStyles;
} & StandardProps) => (
  <img
    src={source}
    alt={alt}
    css={css`
      ${StandardCSS(standardProps)}
      ${overrideCss}
    `}
  />
);

export default Image;
