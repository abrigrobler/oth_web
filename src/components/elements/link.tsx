/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from '@emotion/react';
import StandardCSS from '../../types/standard-css';
import StandardProps from '../../types/standard-props';

const Link = ({
  href,
  target,
  overrideCss,
  children,
  ...standardProps
}: {
  href: string;
  target?: string;
  overrideCss?: SerializedStyles;
  children?: React.ReactNode;
} & StandardProps) => (
  <a
    href={href}
    target={target}
    css={css`
      text-decoration: none;
      display: flex;
      width: fit-content;
      ${StandardCSS(standardProps)}
      ${overrideCss}
    `}
  >
    {children}
  </a>
);

export default Link;
