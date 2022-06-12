/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from '../../theme';
import StandardCSS from '../../types/standard-css';
import StandardProps from '../../types/standard-props';

type HeadingVariants = 'hero' | 'main' | 'sub';

export const Heading = ({
  variant = 'main',
  children,
  ...standardProps
}: { variant?: HeadingVariants; children?: string } & StandardProps) => {
  const HeadingContent = ({ variant }: { variant: HeadingVariants }) => {
    switch (variant) {
      case 'hero':
        return (
          <h1
            css={css`
              font-size: 3.5rem;
              line-height: 1;
              color: ${theme.colors.darkerGrey};
              @media ${theme.mediaQueries.mobileOnly} {
                font-size: 2rem;
              }
              font-weight: 700;
            `}
          >
            {children}
          </h1>
        );
      case 'main':
        return (
          <h1
            css={css`
              margin: 0;
              line-height: 1;
              @media ${theme.mediaQueries.mobileOnly} {
                font-size: 1.5rem;
              }
            `}
          >
            {children}
          </h1>
        );
      case 'sub':
        return (
          <h2
            css={css`
              margin: 0;
            `}
          >
            {children}
          </h2>
        );
    }
  };

  return (
    <div
      css={css`
        ${StandardCSS(standardProps)}
      `}
    >
      <HeadingContent variant={variant} />
    </div>
  );
};

export const Text = ({
  children,
  ...standardProps
}: { children?: string } & StandardProps) => {
  return (
    <p
      css={css`
        ${StandardCSS(standardProps)}
      `}
    >
      {children}
    </p>
  );
};
